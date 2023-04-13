import { QueryTodos } from "query-todos-registros-db";
import { connection } from "connection-db";


const  queryTodos = new QueryTodos(connection());