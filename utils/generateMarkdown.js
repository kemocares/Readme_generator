const licenses = {
  Apache: {
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    name: "Apache 2.0 License",
  },
  IBM: {
    badge:
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    name: "IBM Public License Version 1.0",
  },
  ISC: {
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    name: "ISC License (ISC)",
  },
  MIT: {
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    name: "The MIT License",
  },
  Mozilla: {
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    name: "Mozilla Public License 2.0",
  },
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenses[data.license].badge}


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
Licensed under ${licenses[data.license].name}.


## <a id="contributing">Contributing</a>

${data.contributing}


## <a id="tests">Tests</a>

${data.tests}


## <a id="questions">Questions</a>

Github Profile: [${data.username}](https://github.com/${data.username})

If you have any questions you can send me an email at ${data.email}
`;
}

module.exports = generateMarkdown;
