const express= require('express');
const app= express();
const cookieParser=require("cookie-parser");



require('dotenv').config();

const PORT=process.env.PORT || 4000;


app.use(cookieParser());
app.use(express.json());



require("./config/database").connect();

const user= require("./routes/user");

app.use("/api/v4",user);

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);

})