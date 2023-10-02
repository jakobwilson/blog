import * as mysql from "mysql";
import config from "../config";
import blogs from "./blogs";
import blogtags from "./blogtags";

export const Connection = mysql.createPool(config.mysql);


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
    blogtags
}