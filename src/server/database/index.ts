import * as mysql from "mysql";
//import mysql from 'mysql2/promise'
import config from "../config";
import blogs from "./blogs";
import blogtags from "./blogtags";
import tags from "./tags";
import authors from "./authors";

export const Connection = mysql.createPool(config.db);



export const Query = <T=mysql.OkPacket>(query: string, values?:Array<string | number>) => {

    return new Promise<T>((resolve, reject) => {
        Connection.query( query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
}


export default {
    blogs,
    blogtags,
    tags,
    authors,
    config
}