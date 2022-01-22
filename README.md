# cypress
test almosafer app using cypress

# cypress-e2e-tests

This repo contains e2e tests written in Cypress for different edX applications

---
---

## Introduction to Cypress

Cypress is a relatively new automated tests tool which is gaining popularity at a very rapid pace

Here is the home page for Cypress if someone wants to look it up

<https://www.cypress.io/>

Cypress has very strong documentation so a new comer could find most of the information from their own site

<https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell>

Also as a starting point it would be good to go through these tutorial videos

<https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices>

---
---

## Test Setup

### Installations

You need to have Node.js installed before using Cypress.

For rest of the installations move to project folder in command prompt and type

`npm install`

which will install Cypress and other supporting tools

---

### Environment Variables

Following Environment Vars should be set before running the tests

`CYPRESS_LMS_USER_EMAIL`

`CYPRESS_LMS_USER_PASSWORD`

_Note_: The above are credentials for a normal edX user who does not have access to admin portal

`CYPRESS_ADMIN_USER_EMAIL`

`CYPRESS_ADMIN_USER_PASSWORD`

_Note_: The above are credentials for an admin portal valid user

Following environment vars would be required for using google api to read gmail inbox

`CYPRESS_GMAIL_ID`

`CYPRESS_GMAIL_CLIENT_ID`

`CYPRESS_GMAIL_CLIENT_SECRET`

`CYPRESS_GMAIL_ACCESS_TOKEN`

`CYPRESS_GMAIL_REFRESH_TOKEN`

_Note_: You can use the method descibed in the below link to get these auth tokens for any personal gmail account

<https://developers.google.com/identity/protocols/OAuth2WebServer#creatingcred>

---

### To run the tests

To run admin almosafer homepage test:

1) Inside the terminal run `npm open cypress`
2) From inside the cypress window click on Home_page.json to run the test.
3) To run the HTML report inside your terminal run `npx cypress run --reporter mochawesome`

