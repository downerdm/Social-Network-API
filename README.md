# Social Network API

## The Task

The Challenge was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I was to use Express.js for routing, a MongoDB database, and the Mongoose ODM, as well as [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages.

My models and API routes were set up following the outlined guidelines.

Seed data was created using Insomnia after the API was created.

The original User Story and Acceptance Criteria were as follows:

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Screenshots

File Structure
![The file structure created in Visual Studio](./assets/images/FileStructure_VS.png)

API Setup in Insomnia
![API setup in Insomnia](./assets/images/API_Insomnia.png)

Get All Users API in Insomnia
![Get All Users API](./assets/images/GetAllUsers.png)

## Walkthrough Videos

- Video 1: <https://drive.google.com/file/d/108rQfKXDpRiPU-rqNx3Dfsi_pYyc7d_O/view?usp=sharing>
- Video 2: <https://drive.google.com/file/d/1NfgiHdxRywrq8J94kCi9iJ1Ab8B9ZO-i/view?usp=sharing>

## GitHub Repository

<https://github.com/downerdm/Social-Network-API>