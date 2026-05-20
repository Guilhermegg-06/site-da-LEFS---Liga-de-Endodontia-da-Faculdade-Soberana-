import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db';

dotenv.config();
const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get('/api/status', (_, res) => {
  res.json({ status: 'ok', service: 'LAE system', environment: process.env.NODE_ENV ?? 'development' });
});

app.get('/api/events', async (_, res) => {
  try {
    const sample = [
      { title: 'Workshop de microscopia', date: '2026-06-10' },
      { title: 'Roda de discussão científica', date: '2026-07-05' },
      { title: 'Projeto de pesquisa em endodontia', date: '2026-08-12' },
    ];

    const dbResponse = await pool.query('SELECT NOW() AS server_time');
    res.json({ sample, serverTime: dbResponse.rows[0].server_time });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eventos', details: String(error) });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
