# Blog Platform API

## Overview

This project is a simple blog platform API built with NestJS and MongoDB. The primary goal of this project is to explore MongoDB indexing and understand its implications on performance, searchability, and data retrieval. The API allows for creating, retrieving, updating, and searching blog posts, along with features like pagination and filtering.

## Features

- **Create Blog Posts:** Create new posts with unique titles, content, authors, tags, and slugs.
- **Read Blog Posts:** Retrieve all posts or a single post by its slug.
- **Search Functionality:** Search for posts based on title or content.
- **Filtering:** Filter posts by author and tags.
- **Pagination:** Retrieve posts in a paginated manner.
- **Error Handling:** Handle duplicate key errors and other Mongoose errors gracefully.
- **Swagger Documentation:** Full API documentation available via Swagger UI.

## Technologies Used

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB:** A NoSQL database used for storing blog posts.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Swagger:** API documentation tool.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/blog-platform-api.git
```

### Install dependencies:

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
