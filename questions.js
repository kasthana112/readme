const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions to prompt the user for information about the application repository
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to prompt the user for information and generate a README file
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile('README.md', markdown, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('README.md has been generated!');
      }
    });
  });
}

// Call the init() function to start the prompt
init();
