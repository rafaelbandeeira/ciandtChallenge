# Instructions

This file aims to help you setting up the Cypress environment on Windows. 

1. Install Node.js <https://nodejs.org/en/download/> 
2. Clone this project into a folder of your choosing
3. Initiate the node modules

        npm init

4. Then, install Cypress in the project folder

        npm install cypress --save-dev

5. After the installation, open the test runner using the command

        npx cypress open

6. Click on "Run all specs", it can be found on the right corner of the Cypress Test Runner

Additionally, after setting up Cypress, you can run the tests headlessly by executing the batch file "run_and_report.bat".
The report is available in the mochawesome-report folder, named report.html.
