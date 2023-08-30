# Study Plan Management System - Backend Task

Welcome to our team! To help you get familiar with our project, we have a task for you related to the backend of our Study Plan Management System. This task is designed to introduce you to the core functionalities we work with.

## Task Description

Your assignment involves creating and working with RESTful APIs to manage study plans. These APIs will allow us to interact with our study plan data stored in MongoDB. The primary operations you'll need to implement are:

### 1. Adding New Study Plan Metadata

Create an API endpoint to insert new metadata into our MongoDB collection.

#### Spec

- Endpoint: `POST /api/studyplans`
- Request Body

```json
{
  "fileKey": "2024_it_bil_.pdf",
  "major": "Information Technology",
  "major_abbrv": "IT",
  "language": "Bilingual",
  "faculty": "Business and Technology",
  "year": "2022"
}
```

- Response Body

```json
{
  "_id": "as64d9ad878817eb8038e3c4",
  "fileKey": "2024_it_bil_.pdf",
  "major": "Information Technology",
  "major_abbrv": "IT",
  "language": "Bilingual",
  "faculty": "Business and Technology",
  "year": "2022"
}
```

- It should return:
  - 201 Created status code if the operation is successful
  - 400 Bad Request status code if the request body is invalid
  - 500 Internal Server Error status code if the backend could not proceed the request

### 2. Retrieving All Study Plan Metadata

Create an API endpoint to retrieve a list of all study plan metadata stored in the collection. It should return:

#### Spec

- Endpoint: `GET /api/studyplans`

- Response Body

```json
[
  {
    "fileKey": "2022_ent_bil.pdf",
    "major": "Entrepreneurship",
    "major_abbrv": "ENT",
    "faculty": "Business and Technology",
    "language": "Bilingual",
    "year": "2022"
  },
  {
    "fileKey": "2022_ent_int.pdf",
    "major": "Entrepreneurship",
    "major_abbrv": "ENT",
    "faculty": "Business and Technology",
    "language": "International",
    "year": "2022"
  },
  {
    "fileKey": "2021_abm_bil.pdf",
    "major": "Airline Business Management",
    "major_abbrv": "ABM",
    "faculty": "Business and Technology",
    "language": "Bilingual",
    "year": "2021"
  }
]
```

- It should return:
  - 200 OK status code if the operation is successful
  - 500 Internal Server Error status code if the backend could not proceed the request

### 3. Retrieving Specific Study Plan Metadata

Create an API endpoint that fetches metadata for a specific study plan based on frontend requests.

#### Spec

- Endpoint `GET /api/studyplans/:fileKey`
- :fileKey = "2021_abm_bil.pdf"
- Response Body

```json
{
  "fileKey": "2021_abm_bil.pdf",
  "major": "Airline Business Management",
  "major_abbrv": "ABM",
  "faculty": "Business and Technology",
  "language": "Bilingual",
  "year": "2021"
}
```

- It should return:
  - 200 OK status code if the operation is successful
  - 404 Not Found status code if the specified fileKey does not exist in the collection
  - 500 Internal Server Error status code if the backend could not proceed the request

### 4. Deleting Study Plan Metadata

Create an API endpoint to remove specific study plan metadata from our collection.

- Endpoint `DELETE /api/studyplans/:fileKey`
- :fileKey = "2021_abm_bil.pdf"
- Response Body

```json
{
  "status": "deleted"
}
```

- It should return:
  - 200 OK status code if the operation is successful
  - 404 Not Found status code if the specified fileKey does not exist in the collection
  - 500 Internal Server Error status code if the backend could not proceed the request

## Getting Started

To get started on this task, follow these steps:

1.  Clone our Git repository.

2.  Set up your development environment

    - Make sure you have [npm](https://nodejs.org/en/download) and [docker](https://www.docker.com/products/docker-desktop/)installed

    - On your terminal, type in the following commands to:

      - install dependencies:

      ```sh
      npm install
      ```

      - Start a local MongoDB instance:

      ```sh
      docker compose up -d
      ```

      - Teardown MongoDB

      ```sh
      docker compose down -v
      ```

3.  Create a new branch for your work, e.g., `chinathai/study-plan-api`.

4.  Implement the required API endpoints and functionality.

    - Run the project: `npm run dev`
    - Access the site via [http://localhost:8080](http://localhost:8080)

5.  Test your APIs thoroughly to ensure they work as expected.

6.  Commit your changes, push to your branch, and create a pull request for review.

## Resources

Feel free to refer to our project documentation and seek help from team members if you encounter any difficulties during this task.

This task will provide you with valuable hands-on experience with our system's backend, and it's a great opportunity to familiarize yourself with our development workflow. Don't hesitate to ask questions and collaborate with your colleagues. Good luck, and we look forward to seeing your contributions!

## How to test your API?

(Postman)[https://www.postman.com/downloads/?utm_source=postman-home]
