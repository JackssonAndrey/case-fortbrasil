import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, password, email, "isAdmin", created_at)
    VALUES('${id}', 'sys', 'admin', '${password}', 'admin@gerencia.com.br', 'true', 'NOW()')`
  );

  await connection.close();
}

create().then(() => console.log('User admin created!'));
