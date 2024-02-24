import { Context } from 'grammy';
import { getCurrentDate, logError } from './logger.service';
import { STEPS } from '../config/steps';
import { User } from '../models/User';

export const createUser = async (ctx: Context) => {
    try {
        const buildUser = {
            first_name: ctx.from?.first_name,
            last_name: ctx.from?.last_name,
            telegram_id: ctx.from?.id,
            last_step: STEPS.SEND_CODE
        };

        if (await isUserExists(ctx)) {
            return null;
        }

        return await User.create(buildUser);
    } catch (error) {
        await logError(`[${getCurrentDate()}] - Error while creating user!`, error);
    }
};

export const isUserExists = async (ctx: Context): Promise<boolean> => {
    try {
        const user = await findUserByTelegramId(ctx.from?.id as number);
        return !!user;
    } catch (error) {
        await logError(`[${getCurrentDate()}] - Error while checking user!`, error);
        return false;
    }
};

export const findUserByTelegramId = async (telegram_id: number) => {
    try {
        return await User.findOne({ where: { telegram_id } });
    } catch (error) {
        await logError(`[${getCurrentDate()}] - Error while finding user by telegram id-${telegram_id}!`, error);
    }
};
