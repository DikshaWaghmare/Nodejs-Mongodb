let mongodb=require("mongodb"); //load the module
//let mongoClient=mongodb.MongoClient; //creating the reference of mongodb module
let mc=mongodb.MongoClient;
//let url="mongodb://localhost:27017"; //default port no. for mongodb
let url="mongodb://127.0.0.1:27017";
mc.connect(url,(err,client)=>{
    if(!err){
        console.log("database connect");
        let db = client.db("mydb");    // it connect to database 

        // insert one record 

        let emp = {_id:8,name:"Meeta",age:30,salary:30000};
        db.collection("Employees").insertOne(emp,(err1,result)=> {
            if(!err1){
                    console.log(result)
            }else {
                    console.log(err1)
            }
            client.close();
        })
        // insert Many 
        // let emp1 = {_id:6,name:"Leeta",age:28,salary:28000};
        // let emp2 = {_id:7,name:"Veeta",age:26,salary:22000}
        // db.collection("Employees").insertMany([emp1,emp2],(err1,result)=> {
        //     if(!err1){
        //             console.log(result)
        //     }else {
        //             console.log(err1)
        //     }
        //     client.close();
        // })
    }else{
        console.log(err);
    }
})