const oracledb = require('oracledb');
require('dotenv').config();

const connection = async () => {
  const connectionDb = await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_URL,
  });

  const result = await connectionDb.execute(
    'SELECT * FROM INFOMED.INF_BENEFICIARIOS where rownum <= 2',
    [],
    { outFormat: oracledb.OUT_FORMAT_OBJECT },
  );
  console.log(result);
};
connection();