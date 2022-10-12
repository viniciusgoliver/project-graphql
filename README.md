# Project GraphQL
## _Embrionary project for GraphQL based frameworks_

Project using the technologies below

- Nodejs
- GraphQL
- Mysql
- Docker
- Yarn

## Features

- Implementing Initial Structure
- Implementing docker for database service
- Implementando variáveis de ambiente



## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd project-graphql
yarn
yarn dev
```

## Docker Running Project

Project is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3333 to the server and 3306 to the database, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd project-graphql
docker-compose up -d
```

This will create the project-graphql image and pull in the necessary dependencies.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:3333
```

## License

This project is licensed under the - see the LICENSE.md file for details
