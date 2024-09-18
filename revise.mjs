import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import jsonFile from "./dsa.json" assert { type: "json" };
import { execSync } from "child_process";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  figlet("DSA Revision", (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
  });
  await sleep();
}

async function number() {
  const ans = await inquirer.prompt({
    name: "number",
    type: "input",
    message: "Questions to be revised: ",
  });
  return ans.number;
}

async function daysDiff() {
  const ans = await inquirer.prompt({
    name: "topic",
    type: "input",
    message: "Minimum day diff: ",
  });
  return ans.topic;
}

async function start() {
  await welcome();
  const num = await number();
  const diff = await daysDiff();

  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  const effDate = d + m * 30 + 365 * (y - 2024);

  jsonFile.forEach((element) => {
    if (num <= 0) return;

    if (element.date - effDate > diff) {
      console.log(element.name);
      console.log(element.description);
      console.log(" ");
      element.date = date.getDate();
    }
  });
}

await start();
