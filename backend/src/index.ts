//this is the place where our lot of server code goes in here initialize express to handle our api roots add con to stripe and start our server
import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"


mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(()=>console.log("Connected to database"))

const app = express();//this will create a new express server for us and assign to app var
app.use(express.json());//this is middleware it automatically convert the body of any request we make to out api server to json
app.use(cors());

app.use("/api/my/user",myUserRoute)
// app.get("/test",async (req:Request,res:Response)=>{
//     res.json({message:"Hello!"});
// });
app.listen(7000,()=>{
    console.log("server started on localhost:7000")
});