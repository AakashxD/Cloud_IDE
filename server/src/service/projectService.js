import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import directoryTree from "directory-tree";
import { execPromisified } from "../utils/execUtility.js";
import path from "path";
export const createProjectService = async () => {

  const projectId = uuidv4();
  console.log("New project ID is", projectId);

  await fs.mkdir(`./projects/${projectId}`, { recursive: true });

  // Run the Vite command inside the new folder
  const response = await execPromisified(
    `npm create vite@latest my-app -- --template react`,
    {
      cwd: `./projects/${projectId}`,
    }
  );
  return projectId;
};
export const getProjectTree = async (projectId) => {
  const projectPath = path.resolve(`./projects/${projectId}`);
  console.log(projectPath);
  const projectTree = directoryTree(projectPath);
  console.log(projectTree);
  return projectTree;
};
