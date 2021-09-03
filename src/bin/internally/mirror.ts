import chalk from "chalk";

import symbols from "log-symbols";
import path from "path";
import fse from "fs-extra";
import defConfig from "./config";

const cfgPath = path.resolve(__dirname, "../config.json");


async function setMirror(link: string) {
  const exists = await fse.pathExists(cfgPath);
  if (exists) {
    await mirrorAction(link);
  } else {
    await defConfig();
    await mirrorAction(link);
  }
}

async function mirrorAction(link: string) {
  try {
    const jsonConfig = await fse.readJson(cfgPath);
    jsonConfig.mirror = link;
    await fse.writeJson(cfgPath, jsonConfig);
    console.log(symbols.success, "Set the mirror successful.");
  } catch (err) {
    console.log(symbols.error, chalk.red(`Set the mirror failed. ${err}`));
    process.exit();
  }
}

export default setMirror;
