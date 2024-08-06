import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GEMINI_KEY: process.env.GEMINI_KEY
    }
};

export default nextConfig;
