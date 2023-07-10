# In Vino Veritas - Wine Tracking App

Duration: 2 Weeks

In Vino Veritas is an app focused on strengthening the knowledge base of beginner level wine drinkers.
Users will be able to add bottles of wine to their collection and edit those details to include their personal rating and tasting notes once the wine has been tasted.  Users will also be able to use the Info Page for wine history information and tips on grape pronunciation and how to taste and take notes on wine.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- Code editing software such as [Visual Studio Code](https://code.visualstudio.com/)
- Database software such as [Postico](https://eggerapps.at/postico/v1.php)
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and tables

Create a new database called `in-vino-veritas` and copy the SQL queries from the database.sql file into your database app (Postico used for development) and run them.

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Usage

 - Login/Register Page - User is either able to register a new account or log in to their existing account.  After logging in the user will be automatically be taken to their profile page.

 - User Profile Page - User is able to see total number of bottles of wine that have been added to their collection as well as their 5 best rated bottles in their collection in MUI card format.  User is able to navigate to any page through the navigation bar at the top of the screen, or they can be taken to the My Cellar page by clicking the button in the middle of the page.

 - My Cellar Page - User is able to see detailed information about each bottle of wine that has been added to the collection - The brand name, vintage, grape, price, location purchased, the user's notes and the user's rating for the wine on a scale of 1-10.  The user can click on the edit or delete icons to the right of the bottle information to either update bottle information, or remove the bottle from the page and the database.  Clicking the Add Some Wine button in the middle of the page will take the user to the Add Wine form page.

 - Add Wine Form Page - User is able to add detailed information in a series of input fields and dropdown menus to be saved to the database then rendered to the My Cellar page.  Upon submission using the Add Bottle To Cellar button at the bottom of the form the data in the inputs is submitted to the database and the user is taken back to the My Cellar page.

 - Learn About Wine Page - User can see some information about the history of winemaking, see tips about tasting and pronunciation, and more information helpful for a beginner level wine connoisseur.
