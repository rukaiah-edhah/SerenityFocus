# API Documentation

## Overview
This document outlines the endpoints provided by our application's API. 

## User Management

### GET /api/get_users
- **Description**: Retrieves all users.
- **Sample Response**: List of user objects.

### POST /api/post_user
- **Description**: Registers a new user.
- **Body**: `{"username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string"}`
- **Sample Response**: Details of the created user.

### DELETE /api/delete_user/:id
- **Description**: Deletes a user by their unique ID.
- **Sample Response**: Confirmation message of deletion.

## Tasks Management

### GET /api/get_tasks
- **Description**: Retrieves all tasks.
- **Sample Response**: List of task objects.

### POST /api/post_tasks/:id
- **Description**: Adds a new task for a specified user.
- **Body**: `{"description": "string", "status": "string"}`
- **Sample Response**: Details of the created task.

### PATCH /api/update_task/:id
- **Description**: Updates a specific task by ID.
- **Body**: `{"description": "string"}`
- **Sample Response**: Confirmation of task update.

### DELETE /api/delete_task/:id
- **Description**: Deletes a specific task by ID.
- **Sample Response**: Confirmation message of task deletion.

## Pomodoro Sessions Management

### GET /api/get_pomodoro_sessions
- **Description**: Retrieves all Pomodoro sessions.
- **Sample Response**: List of Pomodoro session objects.

### POST /api/post_pomodoro_session
- **Description**: Creates a new Pomodoro session.
- **Body**: `{"startTime": "date", "endTime": "date", "defaultDuration": "number", "customDuration": "number", "sessionType": "string"}`
- **Sample Response**: Details of the created Pomodoro session.

### DELETE /api/delete_pomodoro_session/:id
- **Description**: Deletes a specific Pomodoro session by ID.
- **Sample Response**: Confirmation message of Pomodoro session deletion.

## Error Handling in API Responses

The API uses HTTP status codes to indicate the success or failure of an API request. In case of an error, the response will include a status code indicating the type of error, along with a JSON object containing details about the error.

- **400 Bad Request**: The request was unacceptable, often due to missing a required parameter or invalid data.
- **401 Unauthorized**: The request lacks valid credentials for authentication.
- **404 Not Found**: The requested resource doesn't exist.
- **500 Internal Server Error**: An unexpected error occurred on the server.