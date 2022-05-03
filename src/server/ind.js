const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { stringify } = require("nodemon/lib/utils");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.json());
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
mongoose
  .connect(
    "mongodb+srv://surajkotte:suraj9640@cluster0.kougv.mongodb.net/foodWasteDB?retryWrites=true&w=majority"
  )
  .then(console.log("database connectes"))
  .catch((err) => {
    console.log(err);
  });

const todoSchema = new mongoose.Schema({
  userId: String,
  personalDetails : [{
    username : String,
    mobileNumber : Number,
    state:String,
    city:String,
    doorNumber:String,
    landMark:String,
    foodName : String,
    foodQuantity : Number,
    time : String,
    date : String,
    reqType:String
  }]
});

const globalSchema = new mongoose.Schema({
    userId:String,
    username : String,
    mobileNumber : Number,
    state:String,
    city:String,
    doorNumber:String,
    landMark:String,
    foodName : String,
    foodQuantity : Number,
    time : String,
    date:String
})

const todo = new mongoose.model("ToDo", todoSchema);
const GlobalDB = new mongoose.model("GlobalSchema",globalSchema);

app.use(cors());
app.listen(3000, () => {
  console.log("Listening to server 3000");
});

/////////////

app.get("/data", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});

///////////////

app.post("/food/new",urlencodedParser, async (req, res) => {
  todo.find({userId:req.body.text.userId},function(err,docs){
    console.log(req.body.text);
    if(docs.length === 0){
      console.log(docs)
      const todoitem = new todo({

        userId:req.body.text.userId,
        
        personalDetails:[{
          username:req.body.text.Name,
          mobileNumber : req.body.text.Mobile,
          state:req.body.text.State,
          city:req.body.text.City,
          doorNumber:req.body.text.DoorNumber,
          landMark:req.body.text.LandMark,
          foodName : req.body.text.Food,
          foodQuantity : req.body.text.Quantity,
          time : req.body.text.Time,
          date:date,
          reqType:req.body.text.reqType
        }]
    })
    todoitem.save();

    res.json(todo);
      // const todoitem = new todo({
    
      //     userId:req.body.text.title,
      //     description:req.body.text.description
      // })
    }
    else{
      docs[0].personalDetails.push({
        username:req.body.text.Name,
        mobileNumber : req.body.text.Mobile,
        state:req.body.text.State,
        city:req.body.text.City,
        doorNumber:req.body.text.DoorNumber,
        landMark:req.body.text.LandMark,
        foodName : req.body.text.Food,
        foodQuantity : req.body.text.Quantity,
        time : req.body.text.Time,
        date:date,
        reqType:req.body.text.reqType
      })
      const todoitem = new todo(docs[0])
      todoitem.save();
      res.json(todo);
    }
    const globalDB = new GlobalDB({
        userId:req.body.text.userId,
        username:req.body.text.Name,
        mobileNumber : req.body.text.Mobile,
        state:req.body.text.State,
        city:req.body.text.City,
        doorNumber:req.body.text.DoorNumber,
        landMark:req.body.text.LandMark,
        foodName : req.body.text.Food,
        foodQuantity : req.body.text.Quantity,
        time : req.body.text.Time,
        date:date
    })
    globalDB.save();

  });

  
});

//////////////

app.post("/food/new/request",urlencodedParser, async (req, res) => {
  console.log("requested in DB "+req.body.text.userID);
  todo.find({userId:req.body.text.userID},function(err,docs){
    console.log(req.body.text);
    console.log(docs.length);
    if(docs.length === 0){
      const todoitem = new todo({

        userId:req.body.text.userID,
        
        personalDetails:[{
          username:req.body.text.username,
          mobileNumber : req.body.text.mobileNumber,
          state:req.body.text.state,
          city:req.body.text.city,
          doorNumber:req.body.text.doorNumber,
          landMark:req.body.text.landMark,
          foodName : req.body.text.foodName,
          foodQuantity : req.body.text.foodQuantity,
          time : req.body.text.time,
          date:req.body.text.date,
          reqType:req.body.text.reqType
        }]
    })
    todoitem.save();

    res.json(todo);
      // const todoitem = new todo({
    
      //     userId:req.body.text.title,
      //     description:req.body.text.description
      // })
    }
    else{
      docs[0].personalDetails.push({
        username:req.body.text.username,
        mobileNumber : req.body.text.mobileNumber,
        state:req.body.text.state,
        city:req.body.text.city,
        doorNumber:req.body.text.doorNumber,
        landMark:req.body.text.landMark,
        foodName : req.body.text.foodName,
        foodQuantity : req.body.text.foodQuantity,
        time : req.body.text.time,
        date:req.body.text.date,
        reqType:req.body.text.reqType
      })
      const todoitem = new todo(docs[0])
      todoitem.save();
      res.json(todo);
    }

  });

  
});
//////////////////

app.get("/food/delete/:id",async(req,res)=>{
  console.log(req.params.id)
  const result = await GlobalDB.findByIdAndDelete(req.params.id);
  console.log(result)
  res.json(result)
})

//////////////////

app.get("/food/global",async(req,res)=>{
  const global = await GlobalDB.find();
  res.json(global);
})


app.get("/requested",async(req,res)=>{
  const todos = await todo.find();
  res.json(todos);
})