# Currency Conversion Microservice

This microservice provides real-time currency conversion rates between different currencies and the US dollar. It exposes an HTTP endpoint that accepts POST requests with a currency code and returns the conversion rate.

## Instructions
### Programmatically REQUEST Data
To programmatically request data from the microservice, follow these steps:

1. Install Axios: Ensure you have the Axios library installed in your Node.js project. If not, you can install it using npm:
```
npm install axios
```
2. Make a POST Request: Use Axios to make a POST request to the microservice endpoint /convert, passing the desired currency code in the request body. Here's an example call:
```
const axios = require('axios');

const requestData = {
  currencyCode: 'EUR'
};

axios.post('http://localhost:3000/convert', requestData)
  .then(response => {
    console.log('Conversion rate:', response.data.conversionRate);
  })
  .catch(error => {
    console.error('Error occurred:', error.message);
  });
// Replace 'EUR' with the desired currency code.
```
### Programmatically RECEIVE Data
To programmatically receive data from the microservice, ensure you handle the response returned by the Axios POST request. The conversion rate will be available in the response data object (response.data.conversionRate).

### UML Sequence Diagram
Below is a detailed UML sequence diagram illustrating the process of requesting and receiving data from the microservice:
```
Test Program        Microservice
     |                    |
     |--- POST Request -->|
     |                    |
     |<-- Response -------|
     |                    |
     |--- Receive Data --->|
     |                    |
 ```    
This diagram demonstrates the flow of communication between the test program and the microservice. The test program sends a POST request to the microservice, which processes the request and sends back a response containing the conversion rate. Finally, the test program receives the data from the response.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
