import path from 'path';

export default ({ env }) => {
  const connectionString = env('DATABASE_URL');

  if (connectionString) {
    // PRODUCTION: Use the Connection String (Render)
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString,
          ssl: { rejectUnauthorized: false }, // REQUIRED for Render
        },
        debug: false,
      },
    };
  }

  // DEVELOPMENT: Use SQLite (Local)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};