import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import fs from "fs";
import jsonFile from "./dsa.json" assert { type: "json" };
import { execSync } from "child_process";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function question1() {
  const ans = await inquirer.prompt({
    name: "number",
    type: "input",
    message: "Number of questions you did today: ",
  });
  return ans.number;
}

async function Name() {
  const ans = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Question Name: ",
  });
  return ans.name;
}

async function Topic() {
  const ans = await inquirer.prompt({
    name: "topic",
    type: "input",
    message: "Topic: ",
  });
  return ans.topic;
}

async function Description() {
  const ans = await inquirer.prompt({
    name: "description",
    type: "input",
    message: "Description: ",
  });
  return ans.description;
}

async function welcome() {
  figlet("DSA Revision", (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
  });
  await sleep();
}

async function start() {
  await welcome();
  const n = await question1();

  for (let i = 0; i < n; i++) {
    const name = await Name();
    const topic = await Topic();
    const description = await Description();

    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();
    const effDate = d + m * 30 + 365 * (y - 2024);

    const newEntry = {
      name: name,
      topic: topic,
      description: description,
      time: effDate,
    };

    const currentData = jsonFile || [];

    currentData.push(newEntry);

    fs.writeFileSync(
      "./dsa.json",
      JSON.stringify(currentData, null, 2),
      "utf-8"
    );
  }
}

await start();
