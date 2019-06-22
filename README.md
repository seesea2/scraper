# InSg

This is full-stack project generated with nodejs & Angular 8.
Please refer to https://insg.xyz for demo.

## websites

1. https://insg.xyz/busArrival
   Bus Arrival Time for Singapore Buses; feature is based on DataMall API of Singapore Land Transport Authority.

2. https://insg.xyz/dict
   Oxford dictionary; feature is based free API of Oxford Dictionary. The API is to be abolished in future according to Oxford announcement; chargeable API is required for future usage.

## Development server

Run `npm run debug:server` to build server in debug folder and watch dev server changes.
Run `node ./debug/server.js` to start the dev server.
Navigate to `https://localhost`.

## Development browser

Run `npm run debug:client` to build client in debug folder and watch dev client changes.
Run `node ./debug/server.js` to start the dev server.
Navigate to `http://localhost`.

## Release

Run `npm run publish` to build server and client. The build artifacts will be stored in the `./dist` directory.
Run `npm start` to start the production server.

## Docker

Run `docker build -t insg .` to create docker image - insg.
Run `docker run -d -p 80:80 -p 443:443 insg` to deploy the docker image - insg.
