/* eslint-disable no-console */

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Start our app!
const app = require('./app');
const { setUpOctokitAPI } = require('./routes/api/github');

const githubApi = setUpOctokitAPI();

app.set('port', process.env.PORT || 3001);
app.set('github', githubApi);

const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
