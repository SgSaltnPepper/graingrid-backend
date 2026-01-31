"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = ({ env }) => {
    const connectionString = env('DATABASE_URL');
    // PROD: Use PostgreSQL (Render)
    if (connectionString && process.env.NODE_ENV === 'production') {
        return {
            connection: {
                client: 'postgres',
                connection: {
                    connectionString,
                    ssl: { rejectUnauthorized: false }, // Required for Render Postgres
                },
                debug: false,
            },
        };
    }
    // DEV: Use SQLite (Local)
    return {
        connection: {
            client: 'sqlite',
            connection: {
                filename: path_1.default.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
            },
            useNullAsDefault: true,
        },
    };
};
