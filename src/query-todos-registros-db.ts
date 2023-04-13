import oracledb from "oracledb";

export class QueryTodos {
    private connection: Promise<oracledb.Connection>
constructor(connection:Promise<oracledb.Connection>){
    this.connection = connection
}
}
