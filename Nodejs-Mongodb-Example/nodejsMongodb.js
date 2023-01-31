let mongodb = require("mongodb");
let mc = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
mc.connect(url, (e, client) => {
  if (!e) {
    console.log("Database connected successfully!");
    let db = client.db("mydb");

    //insert one
    let fruit = {_id:4,name:"Grapes",color:"Green"};
    db.collection("Fruits").insertOne(fruit,(err1,result)=> {
        if(!err1){
                console.log(result)
        }else {
                console.log(err1)
        }
        client.close();
    })

    //insert Many
    let fruit1 = { _id: 5, name: "Banana", color: "Yellow" };
    let fruit2 = { _id: 6, name: "Cherry", color: "Red" };
    let fruit3 = { _id: 7, name: "Watermelon", color: "Green/red" };
    db.collection("Fruits").insertMany(
      [fruit1, fruit2, fruit3],
      (err1, result) => {
        if (!err1) {
          console.log(result);
        } else {
          console.log(err1);
        }
        client.close();
      }
    );
  

  //delete one
  let data=db.collection("Fruits").find();
        //console.log(data);
        db.collection("Fruits").deleteOne({_id:7},(err1,result)=> {
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
    

//delete Many
db.collection("Fruits").deleteMany({color:"Green"},(err1,result)=> {
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


//update
db.collection("Fruits").updateOne({_id:7},{$set:{color:"Red"}},(err1,result)=> {
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

//Retrieve data
let info=db.collection("Fruits").find();
        info.forEach(row=>{
            console.log("Id is "+row._id+" Name "+row.name)
        }).finally(()=>{
            client.close();
        })


        
} else {
            console.log(e);
          }
});
