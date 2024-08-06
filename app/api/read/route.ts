import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleGenerativeAI } from '@google/generative-ai';

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
    
    const aiReq = await gemini.generateContent(prompt as string);
    const aiRes = aiReq.response;
    return new Response(aiRes.text(), { status: 200 });
}