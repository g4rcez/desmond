<div align="center">

![Desmond](https://i.imgur.com/SPO2gD7.png)
[![Build Status](https://img.shields.io/travis/com/AckeeCZ/desmond/master.svg?style=flat-square)](https://travis-ci.com/AckeeCZ/desmond)
[![Coverage Status](https://img.shields.io/coveralls/github/AckeeCZ/desmond.svg?style=flat-square)](https://coveralls.io/github/AckeeCZ/desmond?branch=master)
[![Dependency Status](https://img.shields.io/david/AckeeCZ/desmond.svg?style=flat-square)](https://david-dm.org/AckeeCZ/desmond)
[![Npm](https://img.shields.io/npm/v/desmond.svg?style=flat-square)](https://www.npmjs.com/package/desmond)
[![Types](https://img.shields.io/npm/types/desmond.svg?style=flat-square)](https://www.npmjs.com/package/desmond)
[![Docs](https://img.shields.io/badge/docs-typedoc-lightgrey.svg?style=flat-square)](https://ackeecz.github.io/desmond)
[![License](https://img.shields.io/github/license/AckeeCZ/desmond.svg?style=flat-square)](https://github.com/AckeeCZ/desmond/blob/master/LICENSE)

Desmond is a caretaker of boilerplate code for node back-end development, providing a set of maintained tools.
</div>


## Install

```shell
npm i --save desmond
```

## Usage

```ts
import { parseBool } from 'desmond'; // const { parseBool } = require('desmond');

parseBool('false');
```

Project features Typescript definitions! :yum:

To see what functions and tools are available, see the next section.

## Contents

### Express

-   [`absoluteUrl`](https://ackeecz.github.io/desmond/globals.html#absoluteurl)

### Hashing

-   [`compareBcrypt`](https://ackeecz.github.io/desmond/globals.html#comparebcrypt)
-   [`hashBcrypt`](https://ackeecz.github.io/desmond/globals.html#hashbcrypt)
-   [`hash`](https://ackeecz.github.io/desmond/globals.html#hash)

### Database

-   [`attributes`](https://ackeecz.github.io/desmond/globals.html#attributes)
-   [`snakelize`](https://ackeecz.github.io/desmond/globals.html#snakelize)
-   [`toJson`](https://ackeecz.github.io/desmond/globals.html#tojson)
-   [`tableColumns`](https://ackeecz.github.io/desmond/globals.html#tablecolumns)
-   [`transacted`](https://ackeecz.github.io/desmond/globals.html#transacted)

### Promises

-   [`pipe`](https://ackeecz.github.io/desmond/globals.html#pipe)
-   [`promiseChain`](https://ackeecz.github.io/desmond/globals.html#promisechain)
-   [`promisify`](https://ackeecz.github.io/desmond/globals.html#promisify)
-   [`tap`](https://ackeecz.github.io/desmond/globals.html#tap)

### Other

-   [`Microservice`](https://ackeecz.github.io/desmond/classes/microservice.html)
-   [`parseBool`](https://ackeecz.github.io/desmond/globals.html#parsebool)
-   [`generateRandomAlphanumeric`](https://ackeecz.github.io/desmond/globals.html#generaterandomalphanumeric)

## Development

### Building

-   `npm run build`

### Testing

-   `npm run test`
-   `npm run test:coverage`

### Lint

-   `npm run lint`

### Docs

-   `npm run docs`
-   Documentation is generated from the Typescript / JSDoc using Typedoc

## License

This project is licensed under [MIT](./LICENSE).
