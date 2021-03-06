// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Table of Contents 
  - Description
  - Installation
  - Usage
  - Constribution
  - Test
  

  o Description:
  ${data.description}

  o Installation
  ${data.installation}

  o Usage
  ${data.usage}

  o Contribution
  ${data.contribution}

  o test
  ${data.test}
  - Email: ${data.emailAddress} `;
}

module.exports = generateMarkdown;
