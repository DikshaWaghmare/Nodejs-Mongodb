let mongodb=require("mongodb"); //load the module
//let mongoClient=mongodb.MongoClient; //creating the reference of mongodb module
let mc=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017"; //default port no. for mongodb

mc.connect(url,(err,client)=>{
    if(!err){
        console.log("database connect successfully!");
        let db=client.db("mydb");
        let cursor=db.collection("Employees").find();
        //console.log(cursor);
        cursor.forEach(doc=>{
            //console.log(doc);
            console.log("Id is "+doc._id+" Name "+doc.name)
        }).finally(()=>{
            client.close();
        })
    }else{
        console.log(err);
    }
})