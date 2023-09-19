const express=require("express");
const router=express.Router();


const {login,signup}= require("../controllers/Auth");
const {auth,isStudent,isAdmin}= require("../middlewares/auth");

router.post("/login",login);
router.post("/Signup",signup);


//protected routes

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to auth dashboard",
    });

});


router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the student router",
    });



});


router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Admin router",
    });
});



module.exports=router;
