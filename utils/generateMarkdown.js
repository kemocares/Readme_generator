// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}


## Table of Contents 


* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## <a id="installation">Installation</a>

${data.installation}


## <a id="usage">Usage</a>

${data.usage}


## <a id="license">License</a>

Copyright (c) 2023 Oluwakemi Folorunsho. All rights reserved.
Licensed under the [MIT](LICENSE.md) license.


## <a id="contributing">Contributing</a>

For information on how to contribute to this project,see our [code of conduct](CONTRIBUTING.md).


## <a id="tests">Tests</a>

${data.tests}


## <a id="questions">Questions</a>

${data.questions}
`;
}

module.exports = generateMarkdown;
