import express from "express"
import  {createProjectController } from '../../controllers/projectController.js'
import {getProjectTreeController}  from '../../controllers/projectController.js'
const router=express.Router();

  router.get('/projects/:projectId',getProjectTreeController);

  router.post('/projects',createProjectController);
  
export default router;