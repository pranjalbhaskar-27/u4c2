const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema= new Schema({
    firstName: {
        type: String,
        required:[true,'Name required']
    },
    middleName:{
        type:String
    },
    lastName:{
        type: String,
        required:[true,'Last Name required']
    },
    age:{
        type: Number,
        required:[true,'Age required']
    },
    email:{
        type: String,
        required:[true,'Email required']
    },
    address:{
        type: String,
        required:[true,'Address requireed']
    },
    gender:{
        type:String,
        default:'female'
    },
    type:{
        type:String,
        default:'customer'
    },
    createdAt:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Number,
        required:true
    }
    // middleName
})

const BranchDetailSchema={
    name:{
        type: String,
        required:[true,'Name required']
    },
    address:{
        type: String,
        required:[true,'Address requireed']
    },
    IFSC:{
        type:String,
        required:[true,'IFSC required']
    },
    MICR:{
        type:Number,
        required:[true,'MICR required']
    },
    createdAt:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Number,
        required:true
    }
}

const MasterAccountSchema={
    balance:{
        type:Number,
        required:[true,'Balance nil']
    },
    createdAt:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Number,
        required:true
    }
}

const SavingAccSchema={
    account_number:{
        type:Number,
        required:[true,'Acc No. required']
    },
    balance:{
        type:Number,
        required:[true,'Balance nil']
    },
    interestRate:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Number,
        required:true
    }
}

const FixedAccountSchema={
    account_number:{
        type:Number,
        required:[true,'Acc No. required']
    },
    balance:{
        type:Number,
        required:[true,'Balance nil']
    },
    interestRate:{
        type:Number,
        required:true
    },
    maturityDate:{
        type:String,
        required:true
    },
    createdAt:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Number,
        required:true
    }
}

const User=mongoose.model('user',UserSchema);
module.exports=User

const BranchDetail=mongoose.model('branchdetail',BranchDetailSchema);
module.exports=BranchDetail

const MasterAccount=mongoose.model('masteraccount',MasterAccountSchema);
module.exports=MasterAccount

const SavingsAccount=mongoose.model('savingacc',SavingAccSchema);
module.exports=SavingsAccount;

const FixedAccount=mongoose.model('fixedaccount',FixedAccountSchema);
module.exports=FixedAccount


