import { loggerError, loggerInfo, loggerWarring } from "@/util";
import latestVersion from "latest-version";
import shelljs from "shelljs";

const packageInfo = require("@/package.json");

const parseVersion = (ver: string) => {
  return ver.split(".").toString();
};

export const checkVersion = async () => {
  const latestVer = await latestVersion(packageInfo.name);
  if (parseVersion(latestVer) > parseVersion(packageInfo.version)) {
    loggerWarring(`The current version is the :  ${latestVer}`);
  } else {
    loggerInfo("The current version is the latest:");
  }
};

export const existNpm = async (packageName: string) => {
  try {
    return await latestVersion(packageName);
  } catch (error: unknown) {
    loggerError(error as string);
    process.exit(1);
  }
};

export const npmInstall = async (packageName: string) => {
  try {
    shelljs.exec(`yarn add ${packageName}`, {cwd: process.cwd()});
  } catch (error: unknown) {
    loggerError(error as string);
    process.exit(1);
  }
};
