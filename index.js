const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const prompt = inquirer.createPromptModule();
// array of questions for user
const questions = [
  {
    name: "title",
    message: "what is the title of your projet?",
  },
  {
    type: "editor",
    name: "description",
    message: "describe your project",
  },
  {
    type: "editor",
    name: "installation",
    message:
      "Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "editor",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    name: "license",
    type: "list",
    message: "Please choose from the following license options",
    choices: ["Apache", "IBM", "ISC", "MIT", "Mozilla"],
    default: "ISC",
  },
  {
    type: "editor",
    name: "contributing",
    message: "What are the contribution guidelines for this project?",
  },
  {
    name: "tests",
    type: "editor",
    message: "Provide examples on how to run test on your application.",
  },
  {
    name: "username",
    message: "What is your Github Username?",
  },
  {
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  prompt(questions).then((answers) => {
    writeToFile(path.join(__dirname, "README.md"), generateMarkdown(answers));
  });
}

// function call to initialize program
init();
