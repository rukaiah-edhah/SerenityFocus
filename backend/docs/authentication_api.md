# Authentication API

## Overview

This documentation covers key authentication endpoints for signing in, signing up, and logging out.

## Endpoints

### `/signup` (POST)
- Registers a new user.
- **Body**: `username`, `password`, `firstname`, `lastname`, `email`.

### `/signin` (GET/POST)
- Authenticates user.
- POST **Body**: `username`, `password`.
- Redirects on success/failure.

### `/logout` (GET)
- Logs out the current user.
- Redirects to a safe route.

### `/protected-route` (GET)
- For authenticated users only.
- Middleware: `isAuth`.

## Middleware

### `isAuth`
- Checks user authentication.
- Blocks unauthorized access.