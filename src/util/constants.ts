import { argv } from "yargs";
import paths from "./paths";

export const pkg = require(paths.appPackageJson);

export const isDevelopment = process.env.NODE_ENV !== "production";
export const ENABLE_ANALYZE = !!argv.analyze;
export const DEV_BUILD_TYPE = process.env.BUILD_TYPE === "dev";

export const COPYRIGHT = `/** @preserve Powered by 云联智慧 (http://www.china-ccw.com/) */`;

export const PROJECT_ROOT = paths.appPath;
export const PROJECT_LIB_ROOT = paths.appPath + "/lib";
export const PROJECT_NAME = pkg.name;
export const PROJECT_VERSION = pkg.version;
export const COMMAND_NAME = pkg.commandName;

