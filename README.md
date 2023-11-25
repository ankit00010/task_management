# Task Management API

This is a simple Task Management API built using Node.js, Express.js, and MongoDB. Users can register, log in, create tasks, view tasks, update task status, and delete tasks.

## Prerequisites

- Node.js installed
- MongoDB installed and running
- Postman or any API testing tool

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-management-api
2.Install dependencies:
npm install

3.Create a .env file in the project root and add the following variables:
PORT=5000
ACCESS_TOKEN_SECRET=<your-secret-key>
CONNECTION_STRING=<your-mongodb-connection-string>

Running the Application
1.Start the application:
npm run dev

2.Open Postman or your preferred API testing tool.

3.Register a new user:

Endpoint: http://localhost:5000/api/users/register

Method: POST
Register a new user:

Endpoint: http://localhost:5000/api/users/register

Method: POST
Body:{
  "username": "test",
  "email": "pacifc@gmail.com",
  "password": "test1234"
}


4.Log in to get an access token:

Endpoint: http://localhost:5000/api/users/login

Method: POST

Body:{
  "email": "pacifc@gmail.com",
  "password": "test1234"
}
Copy the access token received in the response.

5.In Postman, go to the Authorization section and choose "Bearer Token". Paste the copied access token.

6.Create a task:

Endpoint: http://localhost:5000/api/tasks/

Method: POST

Body:{
  "title": "Sample Task",
  "description": "This is a test task.",
  "assigned_user": "test",
  "due_date": "2023-12-01",
  "completion_status": false
}
7.View all tasks:

8.Endpoint: http://localhost:5000/api/tasks/
Method: GET
View a specific task:

9.Endpoint: http://localhost:5000/api/tasks/{task-id}
Method: GET
Update a task:

10.Endpoint: http://localhost:5000/api/tasks/{task-id}
Method: PUT
Body: Choose the content you want to update (e.g., "completion_status": true).
Delete a task:

11.Endpoint: http://localhost:5000/api/tasks/{task-id}
Method: DELETE


Additional Information
The application uses JSON Web Tokens (JWT) for authentication.
Task due dates are in the format YYYY-MM-DD.



Remember to replace `<repository-url>` with the actual URL of your Git repository. This README provides step-by-step instructions for setting up and using your Task Management API.




