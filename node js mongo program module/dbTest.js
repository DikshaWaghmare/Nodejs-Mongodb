let mongodb=require("mongodb"); //load the module
//let mongoClient=mongodb.MongoClient; //creating the reference of mongodb module
let mc=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017"; //default port no. for mongodb

mc.connect(url,(err,client)=>{
    if(!err){
        console.log("database connected successfully");
    }else{
        console.log("database not connect");
    }
})

