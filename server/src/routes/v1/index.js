import express from "express"
import  {createProjectController } from '../../controllers/projectController.js'
import {getProjectTreeController}  from '../../controllers/projectController.js'
const router=express.Router();

  router.get('/project/tree/:projectId',getProjectTreeController);

  router.post('/project',createProjectController);
  
export default router;