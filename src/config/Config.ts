// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
export const jwtKey = process.env.JWT_KEY;
export const openEndpoints: string[] = process.env.OPEN_ENDPOINTS!.split(",");

export const db = {
    name: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_USER_PWD || '',
};

export const prodDb = {
    name: process.env.PROD_DB_NAME || '',
    host: process.env.PROD_DB_HOST || '',
    port: process.env.PROD_DB_PORT || '',
    user: process.env.PROD_DB_USER || '',
    password: process.env.PROD_DB_USER_PWD || '',
};

export const TWILIO = {
    sid: process.env.TWILIO_ACCOUNT_SID || '',
    token: process.env.TWILIO_AUTH_TOKEN || '',
    phoneNumber: process.env.TWILIO_PHONE_NUMBER || '',
};

export const GMAIL_CONFIG = {
    service: process.env.GMAIL_SERVICE || '',
    user: process.env.GMAIL_AUTH_USERNAME || '',
    password: process.env.GMAIL_AUTH_PASSWORD || '',
}

export const FIREBASE_NOTIFICATION_CONFIG = {
    priority: process.env.FIREBASE_NOTIFICATION_PRIORITY || '',
    timeToLive: process.env.FIREBASE_NOTIFICATION_TIME_TO_LIVE || '',
}

export const corsUrl = process.env.CORS_URL;

export const tokenInfo = {
    accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_SEC || '0'),
    refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_SEC || '0'),
    issuer: process.env.TOKEN_ISSUER || '',
    audience: process.env.TOKEN_AUDIENCE || '',
};

export const logDirectory = process.env.LOG_DIR;
