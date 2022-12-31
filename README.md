# RECIPE ROUNDUP

## CS50 Final Project

## Video Demo: https://youtu.be/Og4hZCW1iZE

## Description

My project allows users to search for recipes. They may search by categories of trending or vegetarian. There are also cuisines from which to select, including Italian, Mediterranean, and Thai. It includes a search bar so users can search for specific items or ingredients.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Components include the cuisines available (Category), Trending and Vegetarian Recipes, the search bar. Clicking on these will bring up recipes from which to select. Clicking on a recipe will bring up that particular recipe page.

Within the recipe page, a user can access the instructions and the ingredients.

BrowswerRouter is used within App.js for routing. It enables navigation between views from different components, allows the browser URL to be changed, and keeps the UI in sync with the URL.

The ReactJS useNavigate() Hook is used within the search function to go to the specific URL generated using the input from the user for the search.

The Link component renders a component that can navigate to a screen on press. It has a built-in function to assign what is clicked to a class of active.

Styled-components was also used. It is a React library that allows you to create JavaScript components that are responsible for CSS styling.

LocalStorage is used when retrieving cuisines in order to minimize API calls. If it has already been called, it will be loaded in localStorage and retrieved locally.

Special effects were achieved with Splide, which provides a nice carousel effect. AnimatePresence provides a nice fade in/fade out effect.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# project

# project
# project
