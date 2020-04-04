# Scraper

### This is project generated with nodejs & Typescript.

## Development 

Run `npm run ts-node .src/server.ts` to debug.
Navigate to `http://localhost:8888`.


## Release

1. Run `npm run build` to build server. The build artifacts will be stored in the `./dist` directory.
    Run `node ./dist/server.js` to execute the service.
2. Run `docker build --tag scraper .` to build docker.
    Run `docker run -d -p 8888:8888 scraper` to execute the service.

