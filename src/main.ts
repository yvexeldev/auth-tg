import { bot } from './config/bot.js';
import { database } from './config/database.js';
import { PORT, server } from './config/server.js';
import { getCurrentDate, logError } from './services/logger.service.js';

async function bootstrap() {
    try {
        await database.authenticate({
            logging: false
        });
        console.log(`[${getCurrentDate()}] - Connection with database successfully!`);

        await database.sync({
            logging: false
        });
        console.log(`[${getCurrentDate()}] - Models synced!`);

        server.listen(PORT, () => {
            console.log(`[${getCurrentDate()}] - Server running on port - ${PORT}`);
        });

        console.log(`[${getCurrentDate()}] - Bot starting`);
        await bot.start();
    } catch (error) {
        await logError(`[${getCurrentDate()}] - Error while initting the application`, error);
    }
}

bootstrap();
