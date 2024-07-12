import crypto from 'crypto'
import { envHandler } from '../config/envConfig.js';



export function generateHash(parameters) {
    let hashData = envHandler.PAY_IN_SALT;
    Object.keys(parameters).sort().forEach(key => {
        const value = parameters[key];
        if (value && value.length > 0) {
            hashData += '|' + value.trim();
        }
    });
    return crypto.createHash('sha512').update(hashData).digest('hex').toUpperCase();
}