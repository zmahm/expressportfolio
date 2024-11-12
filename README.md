# Express Portfolio

A basic Express application to demonstrate foundational skills in building a server-side application using Express.js.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features
- Basic Express.js server setup.
- Structured routes and middleware.
- Configured for deployment using Serverless Framework.

## Installation

1. Clone the repository:
   ```console
   git clone https://github.com/zmahm/expressportfolio.git
   cd expressportfolio
   ```

2. Install dependencies:
   ```console
   npm install
   ```
4. Run the server:
  ```console
npm start
  ```
## Usage

    Open your browser and navigate to http://localhost:3000 to view the running application.
    Adjust routes or middleware in the /routes and /middleware directories to expand functionality.

## Folder Structure

- `index.js`: The main file that starts the Express server.
- **routes/**: Contains the different route files for handling HTTP requests.
- **middleware/**: Holds middleware functions to manage request processing.
- `serverless.yml`: Configuration for deploying the application using Serverless Framework.

## Unit Tests
This project utilises Mocha js for unit tests. 
Running Tests:
```console
npm test
```
## License
This project is licensed under the MIT License.
