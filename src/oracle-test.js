const oracledb = require('oracledb');
require('dotenv').config();

const connection = async () => {
  const connectionDb = await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_URL,
  });
  const result = await connectionDb.execute(
    `SELECT * FROM INFOMED.HG_VM_CREDENCIAMENTO t 
     where t.status='ATIVO' 
     and rownum <= 10
     and lower(t.nome) like '%alberto%'
    `,
    [],
    { outFormat: oracledb.OUT_FORMAT_OBJECT },
  );
  return connectionDb;
  
};

connection();

module.exports = connection;