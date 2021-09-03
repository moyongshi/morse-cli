#!/usr/bin/env node

import { Command } from "commander";
import path from "path";

//设置 @ 快捷方式，必须这么使用
import alias from "module-alias";

alias.addAlias("@", path.resolve(__dirname, "../../lib"));

import { COMMAND_NAME, PROJECT_VERSION, PROJECT_ROOT } from "@/util/constants";
import updateChk from "./internally/update";
import setMirror from "./internally/mirror";
import dlTemplate from "./internally/download";
import initProject from "./internally/init";

const program = new Command(COMMAND_NAME);

// version
program.version(PROJECT_VERSION, "-v, --version");

// upgrade
program
  .command("upgrade")
  .description(`Check the ${COMMAND_NAME} version.`)
  .action(() => {
    updateChk();
  });

// mirrorq
program
  .command("mirror <template_mirror>")
  .description("Set the template mirror.")
  .action((tplMirror) => {
    setMirror(tplMirror).then();
  });

// template
program
  .command("template")
  .description("Download template from mirror.")
  .action(() => {
    dlTemplate().then();
  });

// init
program
  .name("init")
  .usage("<commands> [options]")
  .command("init <project_name>")
  .description("Create a javascript plugin project.")
  .action(project => {
    initProject(project).then();
  });

program.parse(process.argv);
