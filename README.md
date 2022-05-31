# README

### A health and fitness website project

###### Creators: Bilal Al Malek, Magnus Bryntheson, Deaa Khankan, Torbjörn Livén, Sara Persson, Aliasgar Shereef, Hedda Wingårdh.

#### What is the project?

Our project is a web application for health-conscious people seeking information and inspiration about training and health.

#### What is the project's value?

It provides inspiration and information in training and health, which is [the third goal in the UN goals](https://www.un.org/sustainabledevelopment/health/): "Ensure healthy lives and promote well-being for all at all ages"—and a concern for many persons.

#### Where can users get help with the project?

Please get in touch with us on this email: torbjorn.liven@gmail.com

## How the website works

![Website homepage example picture](WebsitePromo.png)

The website has four main features:

- Exercises
  - Categories of exercises with regards to specified bodyparts—for specific and targeted workouts
- Food and Health
  - Categories of healthy foods and their relevant information with regards to health
- Tips
  - For ensuring a healthy lifestyle
- Calculators
  - Such as BMI calculators for easy and accessible health checks

There are also additional features such as login, sessions, favourites, filters, a search bar, and accounts.

## How to view the project and other relevant information ~

#### How to find course turn-ins

Please see the _team_Reflections_ folder for the team reflections. [Link to the first team reflection.](https://github.com/Mange99/Janet-Jackson/blob/main/team_Reflections/Team_reflection%20w3.pdf)

Please see the _individual_Reflections_ folder for the individual reflections.

For the **Business Model Canvas**, the **Mockup**, the **social contract**, see file Business Model Canvas.md, Mockup-3*Agile.pdf, SocialContract.txt, respectively.
They are stored in the \_res* folder, found under _src/res_

For the Trello board:[Link to trello.] (https://trello.com/invite/b/lLWEe4ep/855984ea0bd207889bc973e7acbc3218/agile)

## Project specifications

The application contains over 1000 different exercises, targeting all parts of the body. With much variation in equipment, users don't need to
have big machines or 20 different dumbbells, but can instead opt to search for only body weight exercises or the equipment they have available to them.
For health conscious people, we offer different calculators such as BMR (Basal Metabolic Rate) done with the Mifflin St Jeor equation, AMR (Active Metabolic Rate),
a macro tracker based on calorie intake and many more.

## How to run the application

- Clone the repository to your local machine
- Please make sure you have node installed. If not you can download it from here https://nodejs.org/en/download/
- It consists of one frontend directory /ui, and one backend directory /api which both need to run separately
- In the project directory Janet-Jackson/ open two terminals and enter the /ui and /api directories separately.
- To start and install each of their dependencies, do the following for both directories
  - ##### `npm install`
- To start the project then run
  - ##### `npm start`
- The project will then be available on [http://localhost:3000](http://localhost:3000) for view in the browser.
- The server will run [http://localhost:3080](http://localhost:3080) and will receive requests from the frontend.

## React instructions

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
