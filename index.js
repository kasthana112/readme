const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');



function init() {
    inquirer.prompt(questions).then((answers)
    )}

    fs.writeFile('README.md', generateMarkdown(), (err) =>
    err? console.log(err) : console.log('Success!')


    );

    
init();
