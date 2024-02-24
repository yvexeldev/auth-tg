import { caching } from 'cache-manager';

const CACHE_TTL = 60 * 1_000;
export const CACHE_OTP_PREFIX = 'otp-';
export const CACHE_USER_PREFIX = 'user-';

let memoryCache;

caching('memory', {
    max: 100,
    ttl: CACHE_TTL
}).then((cache) => {
    memoryCache = cache;
});

export { memoryCache };
