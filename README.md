# Project Name

######An online retail front end, with a new, production worthy backend.

## Related Projects

  - https://github.com/AmazonRainforest/product-images
  - https://github.com/AmazonRainforest/related-products
  - https://github.com/AmazonRainforest/reviews
  - https://github.com/AmazonRainforest/proxy-jesse

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

####scripts

to: | enter
:---:|---:
start nodemon* |`npm run start `
start webpack**|`npm run build`
seed the DB | `npm run seed`
run tests| `npm run test`
check coverage| `npm run test:coverage`


*will watch _only_ the server, _not_ the DB.
**in watch mode.

####API

|REST|API ENDPOINTS|
|--:|:-:|
CREATE|/items/
READ|/items/:id
UPDATE|/items/:id
DELETE|/items/:id


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development
default port 3002

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

