import express from "express"
const v1router=express.Router();
  v1router.get('/',(req,res)=>{
    res.json("ping is working");
  })
export default v1router;