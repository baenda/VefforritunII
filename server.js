const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3000; //Line 3

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: '89nOnHMeaWXYUd0MlSOyyT5JeKv1HT38',
  issuerBaseURL: 'https://dev-jvrotzrh.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6