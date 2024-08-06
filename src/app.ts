import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import aiRoute from './routes/ai';

const app = express();

app.use(cors())
app.use('/ai', aiRoute);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});