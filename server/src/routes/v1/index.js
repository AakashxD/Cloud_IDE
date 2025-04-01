import express from "express"
import  createProjectController  from '../../controllers/projectController.js'
const router=express.Router();
  router.get('/',(req,res)=>{
    res.json({ message: "This is the ping URL" });
  })
  router.post('/projects',createProjectController);
export default router;