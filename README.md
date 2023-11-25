# Task Management API

This is a simple Task Management API built using Node.js, Express.js, and MongoDB. Users can register, log in, create tasks, view tasks, update task status, and delete tasks.

## Prerequisites

- Node.js installed
- MongoDB installed and running
- Postman or any API testing tool

## Installation
Related images 
Register the user
![image](https://github.com/ankit00010/task_management/assets/111192702/00d021f8-a997-4239-a0f6-3b88fbef6b41)

Login the user
![image](https://github.com/ankit00010/task_management/assets/111192702/ba7f95bf-c8b6-4175-86c0-54f3c402ab64)

Copy the access token 
![image](https://github.com/ankit00010/task_management/assets/111192702/1a042b15-1a94-4f39-b99f-c992e92601fd)


add this on Authorization->bear token 
![image](https://github.com/ankit00010/task_management/assets/111192702/a0fe629b-344c-4d87-8bb4-221be3984ad3)


Create n number of tasks 
![image](https://github.com/ankit00010/task_management/assets/111192702/4b13ddfa-4401-4553-a668-31d2d4597ae8)

View all the tasks by sending get request 
![image](https://github.com/ankit00010/task_management/assets/111192702/ab063ec4-979e-4159-b969-2c2396ff40f2)


Can get access to particular id by adding the id of that task
![image](https://github.com/ankit00010/task_management/assets/111192702/5b47b904-4ffd-42b7-9732-6f4858e0475e)


Can update the body content for eg here the task completion_status is false which is updated to true
![image](https://github.com/ankit00010/task_management/assets/111192702/bfdbf044-59a3-4442-97c1-bd6acc605d9f)


then you can delete that task by adding the id and sending the delete request
![image](https://github.com/ankit00010/task_management/assets/111192702/83f34b55-2636-45b4-bfad-a5b67fd39cc2)


Now there is no task since we deleted
![image](https://github.com/ankit00010/task_management/assets/111192702/ddbec42d-4332-45b6-9a56-1e8f855ab8f0)


You can check the stats by sending the get request how many tasks are completed in a week
![image](https://github.com/ankit00010/task_management/assets/111192702/7688e5fc-dea3-4652-995a-755a84e0dc18)


follow the below instructions :]








1 . Clone the repository:

   ```bash
  [ git clone <repository-url>](https://github.com/ankit00010/task_management.git)
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




