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
  username : String,
  personalDetails : [{
    mobileNumber : Number,
    Address : String,
    foodName : String,
    foodQuantity : Number,
    time : String,
    date : String
  }]
});

const todo = new mongoose.model("ToDo", todoSchema);

app.use(cors());
app.listen(3000, () => {
  console.log("Listening to server 3000");
});
app.get("/data", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});

app.post("/food/new",urlencodedParser, async (req, res) => {
  // console.log(req.body);

  todo.find({userId:req.body.text.userId},function(err,docs){
    if(docs.length === 0){
      console.log(docs)
      const todoitem = new todo({

        userId:req.body.text.userId,
        username:req.body.text.Name,
        personalDetails:[{
          mobileNumber : req.body.text.Mobile,
          Address : req.body.text.Address,
        foodName : req.body.Food,
        foodQuantity : req.body.text.Quantity,
        time : req.body.text.Time,
        date : date
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
        mobileNumber : req.body.text.Mobile,
        Address : req.body.text.Address,
      foodName : req.body.Food,
      foodQuantity : req.body.text.Quantity,
      time : req.body.text.Time,
      date : date
      })
      const todoitem = new todo(docs[0])
      todoitem.save();
      res.json(todo);
    }

  });

  
});

app.get("/food/delete/:id",async(req,res)=>{
  console.log(req.params.id)
  const result = await todo.findByIdAndDelete(req.params.id);
  console.log(result)
  res.json(result)
})
