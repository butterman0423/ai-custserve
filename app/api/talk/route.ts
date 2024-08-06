import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleGenerativeAI, StartChatParams } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_KEY;
if(API_KEY == undefined) {
    throw Error("Gemini API key not found or unrecognizable.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const gemini = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// TODO: This should be stored and managed somewhere else
// In-place memory (that we free after a certain interval) could work
// as there's no need to persist data for a long period of time
// If there's a memory constraint, storing and fetching from a 
// noSQL database could work nicely 
const hist: StartChatParams = {
    history: [
        {
            role: 'user',
            parts: [{ text: '' }]
        },
        {
            role: 'model',
            parts: [{ text: 'Hi there how can I help you' }]
        }
    ]
}

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
    
    const chat = gemini.startChat(hist);
    const aiReq = await chat.sendMessage(prompt);
    const aiRes = aiReq.response;

    return new Response(aiRes.text(), { status: 200 });
}