import { Bot } from 'grammy';
import { getFromEnv } from '../services/config.service';

const BOT_TOKEN = getFromEnv('BOT_TOKEN');
export const CHANNEL = getFromEnv("CHANNEL")

export const bot = new Bot(BOT_TOKEN);
