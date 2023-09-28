import * as mysql from "mysql";
import config from "../config";
import blogs from "./blogs";

export const Connection = mysql.createPool(config.mysql);


export const Query = (query: string, values?:Array<string | number>) => {

    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query( query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
}


export default {
    blogs
}