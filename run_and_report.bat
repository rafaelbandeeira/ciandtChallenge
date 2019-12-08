@title Cypress
@echo off
echo Running tests and writing reports...
npx cypress run
npx mochawesome-merge --reportDir cypress/results>mochawesome.json
npx mochawesome-report-generator mochawesome.json