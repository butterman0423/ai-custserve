import type { NextApiRequest } from 'next'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createHistory, getHistory, updateHistory } from '@/lib/firewrap';
import { getAccountTokens, getUserSessionId } from '@/lib/firevalid';
import { auth } from '@/auth';

const API_KEY = process.env.GEMINI_KEY;
if(API_KEY == undefined) {
    throw Error("Gemini API key not found or unrecognizable.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const gemini = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function GET(req: NextApiRequest) {
    if(!req.url) {
        return new Response('Missing URL.', 
            { status: 400 }
        );
    }

    const url = new URL(req.url as string);
    const prompt = url.searchParams.get('prompt');

    if(prompt === null || prompt === '' || typeof prompt !== 'string') {
        return new Response('Prompt is missing, empty, or misformatted.', 
            { status: 400 }
        );
    }

    let uid: string
    try {
        const session = await auth();
        if(!session) {
            throw Error("Failed to get session");
        }

        const tokens = getAccountTokens(session);
        if(!tokens) {
            throw Error("Token not found");
        }

        const _uid = await getUserSessionId(tokens);
        if(!_uid) {
            throw Error("Failed to retrieve user id.")
        }
        uid = _uid;

    } catch (e) {
        return new Response((e as Error).message, { status: 401 });
    }

    const doc = await getHistory(uid);
    if(!doc.exists) {
        await createHistory(uid);
    }
    
    const docData = doc.data();
    if(!docData) {
        return new Response(`Failed to create history for ${uid}`, { status: 500 });
    }

    const hist = docData['history'];
    if(hist == undefined) {
        return new Response(`Failed to find history for ${uid}`, { status: 500 });
    }

    const chat = gemini.startChat(hist);
    const aiReq = await chat.sendMessage(prompt);
    const aiRes = aiReq.response;
    const response = aiRes.text()

    await updateHistory(uid, {
        history: [
            ...hist,
            {
                role: 'user',
                parts: [{ text: prompt }]
            },
            {
                role: 'model',
                parts: [{ text: response }]
            }
        ]
    })

    return new Response(response, { status: 200 });
}