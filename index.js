// TODO: Include packages needed for this application
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },

  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },

  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
  },

  {
    type: "input",
    name: "tests",
    message: "Provide tests",
  },

  {
    type: "list",
    name: "license",
    message: "Choose a license for your project",
    choices: ["MIT", "Apache", "GPL", "None"],
  },

  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username",
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data)
    .then((data) => console.log("Readme created"))
    .catch((err) => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
