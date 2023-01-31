let mongodb=require("mongodb");
let mc=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017";

mc.connect(url,(e,client)=>{
    if(!e){
        console.log("database connected!");
        let db=client.db("mydb");
        //let data=db.collection("Employees").find();
        //console.log(data);
        // db.collection("Employees").deleteOne({_id:5},(err1,result)=> {
        //     if(!err1){
        //         if(result.deletedCount>0){
        //             console.log("Record deleted successfully")
        //         }else {
        //             console.log("Record not present")
        //         }
        //     }else {
        //         console.log(err1);
        //     }
        //     client.close();
        // })
        db.collection("Employees").deleteMany({salary:{$lt:25000}},(err1,result)=> {
            if(!err1){
                if(result.deletedCount>0){
                    console.log("Record deleted successfully")
                }else {
                    console.log("Record not present")
                }
            }else {
                console.log(err1);
            }
            client.close();
        })
       
        
    }else{
        console.log("Database not connected "+e);
    }
    
})