let mongodb=require("mongodb");
let mc=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017";

mc.connect(url,(e,client)=>{
    if(!e){
        console.log("database connected!");
        let db=client.db("mydb");
        // let data=db.collection("Employees").find();
        // console.log(data);
        db.collection("Employees").updateOne({_id:6},{$set:{salary:35000}},(err1,result)=> {
            if(!err1){
                if(result.modifiedCount>0){
                    console.log("Record updated successfully");
                }else if(result.matchedCount>0){
                    console.log("Record present but new record same as old record")
                }
                else{
                    console.log("Record not present");
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