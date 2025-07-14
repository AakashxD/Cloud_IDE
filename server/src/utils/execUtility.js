import util from "util";
import childProcess from "child_process";

export const execPromisified = util.promisify(childProcess.exec);