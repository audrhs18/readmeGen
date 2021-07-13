// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    // project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name you are working on?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
        
    },

    // project Description
    {
        type: 'input',
        name: 'description',
        message: 'What is the project about(Description)?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
        
    },

    // installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation guiide to users?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Mercy on users');
                return false;
            }
        }
        
    },

        // usage
        {
            type: 'input',
            name: 'usage',
            message: 'what is the purpose of this program using?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('pretty much wonder?');
                    return false;
                }
            }
            
        },

        // contribution
        {
            type: 'input',
            name: 'contribution',
            message: 'How each member of you team has to contribute in this proejct?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('I want to keep you busy');
                    return false;
                }
            }
            
        },


        // test
        {
            type: 'input',
            name: 'test',
            message: 'please provide any idea how to test this project?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('make this project perfect');
                    return false;
                }
            }
            
        },

    // Email
    {
        type: 'input',
        name: 'emailAddress',
        message: 'what is your address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('please input your email');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileWriteName, data) {
    fs.writeFile(fileWriteName, data, (err) => {
        if (err)
            throw err;
        console.log('good job')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInformation) {
        console.log(userInformation);
        writeToFile("README.md", generateMarkdown(userInformation));
    });
}

// Function call to initialize app
init();
