import path from 'path';

export default ({ env }: { env: any }) => {
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
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};