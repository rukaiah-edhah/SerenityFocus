# Database Schema Descriptions

This document provides detailed descriptions of each collection in the database, including the purpose of each field and how they relate to application features.

## Users Collection

**_id**: Auto-generated unique identifier for the user document.

**username**: 
- **Type**: String
- **Description**: Unique username for the user, used for identification and login purposes.
- **Constraints**: Required, must be at least 3 characters long, unique within the database, indexed for efficient querying.

**firstName**: 
- **Type**: String
- **Description**: The user's first name.
- **Constraints**: Required, must be at least 2 characters long, must only contain alphabetic characters and certain special characters (like hyphens or apostrophes).

**lastName**: 
- **Type**: String
- **Description**: The user's last name.
- **Constraints**: Required, must be at least 2 characters long, must only contain alphabetic characters and certain special characters (like hyphens or apostrophes).

**email**: 
- **Type**: String
- **Description**: The user's email address, used for account verification and communication.
- **Constraints**: Required, must be a valid email format, unique within the database, indexed for efficient querying.

**password**: 
- **Type**: String
- **Description**: Hashed password for the user's account.
- **Constraints**: Required, must meet complexity requirements (minimum 8 characters, include a letter, a number, and a special character).

**salt**: 
- **Type**: String
- **Description**: The salt string used in conjunction with bcrypt for hashing the password.

**hash**: 
- **Type**: String
- **Description**: The resulting hash from the bcrypt hashing of the user's password.

### Future Data Points

**timeZone**:
  - **Type**: String
  - **Description**: User's local time zone for localized notifications/reminders.
  - **Constraints**: Optional, valid time zone format.

**preferredLanguage**:
  - **Type**: String
  - **Description**: Language preference for app localization.
  - **Constraints**: Optional.


## Tasks Collection

**_id**: Auto-generated unique identifier for the task document.

**user**: 
- **Type**: ObjectId, references `Users`
- **Description**: Reference to the `User` document to which this task belongs.
- **Constraints**: Required, indexed for efficient querying.

**description**: 
- **Type**: String
- **Description**: A brief description of the task.
- **Constraints**: Required, must be at least 5 characters long.

**status**: 
- **Type**: String, Enum ['pending', 'completed']
- **Description**: The current status of the task indicating whether it is pending or has been completed.
- **Constraints**: Defaults to 'pending'.

### Future Data Points

**category**:
  - **Type**: Array of Strings
  - **Description**: Categories/tags for task organization.
  - **Constraints**: Optional, predefined categories ['Work', 'Personal', 'Health'].

**isRecurring**:
  - **Type**: Boolean
  - **Description**: Indicates if a task is recurring.

**dueDate**:
  - **Type**: Date
  - **Description**: The deadline for task completion.

## PomodoroSessions Collection

**_id**: Auto-generated unique identifier for the Pomodoro session document.

**user**: 
- **Type**: ObjectId, references `Users`
- **Description**: Reference to the `User` document that this Pomodoro session is associated with.
- **Constraints**: Required, indexed for efficient querying.

**startTime**: 
- **Type**: Date
- **Description**: The start time of the Pomodoro session.
- **Constraints**: Required.

**endTime**: 
- **Type**: Date
- **Description**: The end time of the Pomodoro session. This field can be set after the session starts and can be dynamically adjusted.
- **Constraints**: Optional.

**defaultDuration**: 
- **Type**: Number
- **Description**: The default duration of a Pomodoro session, typically set to 25 minutes.
- **Constraints**: Defaults to 25.

**customDuration**: 
- **Type**: Number
- **Description**: Allows users to set a custom duration for the session.

**sessionType**: 
- **Type**: String, Enum ['session', 'break']
- **Description**: The type of Pomodoro session, which can be a focused work session or a break.

### Future Data Points

**taskId**:
  - **Type**: ObjectId, references `Tasks`
  - **Description**: Links session to a specific task.

**upticks**:
  - **Type**: Array of objects { addedTime: Number, uptickTime: Date }
  - **Description**: Tracks when time is added to a session.
