
import connection from "../configs/connectDB"
let addSource = (data) =>{
    return new Promise(((resolve, reject)=>{
        try{
            connection.query("SELECT * from users where data=?", data,function(error,rows){
                if(error){
                    reject(error);
                }
                let source = rows[0];
                resolve(source);
            })
        }catch(e){
            reject(e);
        }
    }));
};


module.exports ={
addSource:addSource
}