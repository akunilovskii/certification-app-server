# React CertificationAPP (BackEnd)

### _Open deployed app [CertificationAPP](https://certification-app-client-xi.vercel.app/)_

### _Open deployed app [Back-End](https://certification-app-server-xi.vercel.app/)_

This is the Back End part of the CertificationAPP Full-Stack project designed to service API request from Front-End to
create, update and delete tests.

Tech used: Middleware, Controllers, Queries, MongoDB, Schemas, JWT Auth, Routes.
Create MongoDB cluster if you do not have it.

1. Clone this repo

```sh
git clone https://github.com/Mike10581/CertificationApp_Server.git
```

2. Install required packages.

```sh
npm install
```

3. Create .env file inside src directory and change date inside square brackets on your own.

```sh
JWT_ACCESS_SECRET=[your-jwt-secret-key]
JWT_REFRESH_SECRET=[your-jwt-refresh-secret-key]
MONGODB_REMOTE=mongodb+srv://[your_login]:[your_password]@cluster0.4gc3y.mongodb.net/sertification_app?retryWrites=true&w=majority
PORT=5000
CLIENT_URL=http://localhost:3000
```

4. Start the app.

```sh
npm start
```

This will run your app on http://localhost:5000

## Project Architecture

```sh
└───modules
    ├───core
    ├───discipline
    │   ├───controllers
    │   └───queries
    ├───user
    │   ├───controllers
    │   ├───dtos
    │   ├───exceptions
    │   ├───middlewares
    │   ├───models
    │   └───service
    └───utils
```

## Deploy on Vercel:

1. Remove "build" script from package.json file

```shell
  "build" : "babel src/index.js -d lib"
```

2. Create vercel.json file and put inside:

```sh
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.js"
    }
  ]
}
```
