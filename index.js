const path=require('path')
const express=require('express')

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 5000;

const connectDB = () =>{
    return mongoose.connect("mongodb+srv://pranjal2795:<password>@cluster0.e0wvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
const userSchema= new mongoose.Schema(
{
    body :{type:String,required:false}
  
},
{
    timestamps:true,
});

const User = mongoose.model("user",userSchema);

app.get("/User", async(req, res) =>{

    try{
const user1=await User.find({}).lean().exec();
return res.send(user1);
    }
    catch(err){
        console.error(err)
    }
})

app.post("/User", async(req, res) =>{

    try{
const user1=await User.create(req.body);
return res.send(user1);
    }
    catch(err){
        console.error(err)
    }
})


app.get('/BranchDetail', (req, res) =>{

    try{
res.send("h")

    }
    catch(err){
        console.error(err)
    }
})


app.get('/MasterAccount', (req, res) =>{

    try{
res.send("h")

    }
    catch(err){
        console.error(err)
    }
})

app.get('/SavingsAccount', (req, res) =>{

    try{
res.send("h")

    }
    catch(err){
        console.error(err)
    }
})

app.get('/FixedAccount', (req, res) =>{

    try{
res.send("h")

    }
    catch(err){
        console.error(err)
    }
})

app.listen(port,async ()=> {
    try{
    await connectDB();
    console.log("listening on port "+port)
}
catch(err)
{
    console.log(error)
}
});