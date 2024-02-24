import { getFromEnv } from '../services/config.service';
import express from 'express';

export const PORT = getFromEnv('PORT');

const server = express();
server.use(express.json());

export { server };
