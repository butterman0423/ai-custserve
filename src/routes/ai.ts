import 'dotenv/config';
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_KEY;
if(API_KEY == undefined) {
    throw Error("Gemini API key not found or unrecognizable.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const gemini = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const router = express.Router();

router.get('/read', async (req, res) => {
    const prompt = req.query['prompt'];
    if(prompt == undefined || prompt === '') {
        return res.status(400).send("Missing or empty prompt was sent.");
    }

    const aiReq = await gemini.generateContent(prompt as string);
    const aiRes = aiReq.response;
    res.send(aiRes.text());
});

export default router;