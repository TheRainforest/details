# Project Name

_An online retail front end from a legacy codebase, with a new, production-worthy backend._

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

**scripts**

to: | enter
:---:|---:
start nodemon* |`npm run start `
start webpack**|`npm run build`
seed the DB | `npm run seed`
run tests| `npm run test`
check coverage| `npm run test:coverage`


*will watch _only_ the server, _not_ the DB.

**in watch mode.

**API**

|REST|API ENDPOINTS|
|--:|:-:|
CREATE|/items/
READ|/items/:id
UPDATE|/items/:id
DELETE|/items/:id

**Expected responses from READ**
```json
{
    "starPercentages": {
        "one": 1,
        "two": 1,
        "three": 1,
        "four": 1,
        "five": 1
    },
    "productInfo": [],
    "_id": "5ec5fd1d5ec43cea31d96d14",
    "id": 1232,
    "productName": "String",
    "producer": "String",
    "answeredQuestions": 3,
    "numberOfRatings": 5,
    "price": 1,
    "inStock": true,
    "__v": 0
}
````
**Expected request from UPDATE**
*
```json
{ "anykeyabove": corespondingtype }
```

*update API can only update one key per request.
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development
default port 3002

**Cassandra**
install and start Cassandra, taking care to use JRE v8
once Postgres is installed run `yarn install` to install necessary packages.
run `cs:init`
followed by `cs:generate` to generate 10M records
and then `cs:seed` to load up records into the DB.
_elapsed time on my 2013 MBP ≈ 25 minutes_

**PostGres**
install and start Postgres, include login information for it per PG* variables in a .env file in root directory per env.sample
once Postgres is installed run `yarn install` to install necessary packages.
run `pg:init`
followed by `pg:generate` to generate 10M records
and then `pg:seed` to load up records into the DB.
_elapsed time on my 2013 MBP ≈ 15 minutes_

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

