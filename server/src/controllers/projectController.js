import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import util from "util";
import childProcess from "child_process";

const execPromisified = util.promisify(childProcess.exec);
 const createProjectController = async (req, res) => {
    try {
        // Generate unique project ID and create a new folder
        const projectId = uuidv4();
        console.log("New project ID is", projectId);

        await fs.mkdir(`./projects/${projectId}`, { recursive: true });

        // Run the Vite command inside the new folder
        await execPromisified(`npm create vite@latest my-app -- --template react`, {
            cwd: `./projects/${projectId}`
        });

        return res.json({ message: "Project created", data: projectId });
    } catch (error) {
        console.error("Error creating project:", error);
        return res.status(500).json({ message: "Error creating project", error: error.message });
    }
};
export default createProjectController;