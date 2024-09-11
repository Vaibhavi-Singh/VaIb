import mongoose from "mongoose"
import jwt from "jsonwebtoken";
const cookieOptions ={
    maxAge: 15*24*60*60*1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
};
const connectDB=(uri)=>{
    mongoose.connect(uri,{dbName:"VAIB_App"})
    .then((data)=> console.log(`Connected to DB: ${data.connection.host}`))
    .catch((err)=>{
        throw err;
    });
};
const sendToken =(res,user,code,message)=>{

    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

    return res.status(code).cookie("VAIB-token",token,cookieOptions).json({
        success:true,
        message,
    });
};
// sendToken("asd",{_id:"asdasd"},201,"User created")

const emitEvent =(req,event,users,data) =>{
    console.log("Emmiting event",event);
};
const deleteFilesFromCloudinary = async(public_ids) =>{

}

export {connectDB,sendToken,cookieOptions,emitEvent,deleteFilesFromCloudinary}