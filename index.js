const express = require("express");
const mongoose =  require("mongoose");
const app = express();
const port = 5000;
//connect mongo database
const connect = ()=>{
    return mongoose.connect("mongodb+srv://pranjal2795:Saridon1@cluster0.e0wvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        middleName:{type:String},
        lastName:{type:String,required:true},
        age:{type:Number, required:true},
        email:{type:String, required:true},
        address:{type:String, required:true},
        gender:{type:String, default:"Female"},
        type:{type:String, default: "customer"},
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const User = mongoose.model("user",userSchema);
const branchdetailSchema = mongoose.Schema(
    {
        name:{type:String, required:true},
        address:{type:String, required:true},
        IFSC:{type:String, required:true},
        MICR:{type:Number, required:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const Branchdetail = mongoose.model("branchdetail",branchdetailSchema);

const masteraccountSchema = mongoose.Schema(
    {
        balance:{type:Number, required:true},
        masteruser_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        manager_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        branchdetail_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"branchdetail",
            required:true
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const Masteraccountdetail=mongoose.model("masteraccountdetail",masteraccountSchema);

const savingsaccountSchema=mongoose.Schema(
    {
        account_number:{type:Number,
             required:true},
        balance:{type:Number,
             required:true},
        interestRate:{type:Number,
             required:true},
        savingsuser_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        branchdetail_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"branchdetail",
            required:true
        },
        master_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"masteraccountdetail",
            required:true
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const Savingsaccount = mongoose.model("savingsaccountdetail",savingsaccountSchema);

const fixedaccountSchema = mongoose.Schema(
    {
        account_number:{type:Number,
             required:true},
        balance:{type:Number,
             required:true},
        interestRate:{type:Number,
             required:true},
        startdate:{type:String,
             required:true},
        maturitydate:{type:String,
             required:true},
        fixeduser_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        branchdetail_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"branchdetail",
            required:true
        },
        master_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"masteraccountdetail",
            required:true
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const Fixedaccountnumber=mongoose.model("fixedaccountnumber",fixedaccountSchema);


app.post("/users",async(req,res)=>{
    try {
        const user = await User.create(req.body);
        return res.status(200).send({holder: user});
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


app.get("/masteraccount", async(req,res)=>{
    try {
        const master = await Masteraccountdetail.find()
        .populate("user") 
        .lean()
        .exec();
        return res.status(200).send({masterholder: master});
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
app.post("/savingsaccount",async(req,res)=>{
    try {
        const saving = await Savingsaccount.create(req.body);
        return res.status(200).send({savingsholder: saving});
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.post("/fixedaccount",async(req,res)=>{
    try {
        const fixed = await Fixedaccountnumber.create(req.body);
        return res.status(200).send({fixed: fixed});
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

    app.get("/masteraccount/:id", async(req,res)=>{
        try {
            const master = await Masteraccountdetail.find(req.params.id).lean().exec();
            return res.status(200).send({masterholder: master});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    });

    app.listen(port, async()=>{
        try {
            await connect();
        } catch (error) {
            console.log(error);
        }
        console.log("listeninig on port "+port);
    });