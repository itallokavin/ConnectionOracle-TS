import oracledb from "oracledb";

export const connection = async () => {
    const connectionDb = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_URL,
    });}