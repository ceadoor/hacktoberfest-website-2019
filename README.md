<h1 align="center">⚡️ hacktoberfest-website-2019</h1>
<p align="center">Website for Hacktoberfest event 2019 hosted by TraceCEA</p>
<p align="center">https://hacktoberfest-tracecea.surge.sh</p>
<br>

### 🧰 Tech / framework(s) used

- Build
     - [Yarn](https://yarnpkg.com/lang/en/)
- BackEnd
    - [ExpressJs](https://expressjs.com/)
    - [GitHub API](https://github.com/octokit/rest.js/)
    - [Google Sheets API](https://sheets.google.com/)
- FrontEnd
    - [ReactJs](https://reactjs.org/)
    - [React Bootstrap](https://react-bootstrap.github.io/)
    - [React Router Dom](https://www.npmjs.com/package/react-router-dom)
    - [Sass](https://sass-lang.com/)
<hr />
 
## 🚀 Quick Start

- `yarn install` to install dependencies.
- `yarn run dev:web` to start the CRA in development.
- `yarn run server` to start the development express server.
- `yarn run build:web` build the files for production.

<hr />

#### 🌟 Passing Environment Variables

##### For Client

Copy `.env.sample` to `.env.development` or `.env.production` in `client/` directory and update credentials in those files.

##### For Server

Copy `variables.env.sample` to `variables.env` in `server/` directory and update the file.

#### 🌟 Accessing Google Sheets API

Follow instructions from [here](https://www.npmjs.com/package/google-spreadsheet#authentication) and update `GSHEETS_ID`, `G_PKEY`, `G_C_EMAIL` fields in `server/variables.env`

#### 🌟 Accessing GitHub API

##### Generate new tokens

Goto [Personal Access Tokens](https://github.com/settings/tokens)

- For unauthenticated requests, the rate limit is 60 requests per
  hour.
  see [Rate Limiting](https://developer.github.com/v3/#rate-limiting)

##### 🌟 Updating metadata

Edit `config/index.js` file with your custom information

##### 🌟 Adding static contents

Copy contents (images, documents, etc...) to `static/` directory

#### 🌟 Publishing to surge.sh using GitHub Actions 

Pass `SURGE_DOMAIN`, `SURGE_LOGIN`, `SURGE_TOKEN` to `settings/secrets` in GitHub Settings

## 🖤 Show your support

Give a ⭐ if this you find this project useful!

## 🗞 Licence

Code released under the [MIT License](LICENSE).

## 📋 Copyrights

Logos & Branding:

- © 2019 DIGITALOCEAN, LLC. ALL RIGHTS RESERVED.
- © 2019 TRACECEA. ALL RIGHTS RESERVED.
