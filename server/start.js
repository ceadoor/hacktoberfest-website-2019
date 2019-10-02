/* eslint-disable no-console */

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Start our app!
const app = require('./app');
const { setUpOctokitAPI } = require('./routes/api/github');

const octokitApi = setUpOctokitAPI();

app.set('port', process.env.PORT || 3001);
app.set('octokit', octokitApi);

const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
