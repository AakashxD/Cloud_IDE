import express from "express"
const v1router=express.Router();
  v1router.get('/',(req,res)=>{
    res.json({ message: "This is the ping URL" });
  })
export default v1router;