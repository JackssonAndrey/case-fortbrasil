import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'db_case_fortbrasil'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
      database:
        process.env.NODE_ENV === 'test'
          ? 'db_case_fortbrasil_test'
          : defaultOptions.database,
    }),
  );
};
