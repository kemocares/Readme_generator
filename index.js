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
    type: "input",
    name: "description",
    message: "describe your project",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Provide a step-by-step description of how to get the development environment running.",
  },
  {
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    name: "tests",
    message:
      "Go the extra mile and write tests for your application. Then provide examples on how to run them.",
  },
  {
    name: "questions",
    message: "Any question?",
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
