const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

// array of questions for user
function init() {
    inquirer.prompt(questions).then((answers)
    )}

    fs.writeFile('README.md', generateMarkdown(answers), (err) =>
    err? console.log(err) : console.log('Success!')
    

    