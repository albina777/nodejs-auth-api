# NodeJS Auth API

## Overview
This project is a backend authentication API built with Node.js, Express, and JWT.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1. Clone the repository:
   `git clone https://github.com/albina777/nodejs-auth-api.git`
   
2. Navigate to the project directory:
   `cd nodejs-auth-api`

3. Install dependencies:
   `npm install`

4. Create a `.env` file in the root directory and add your environment variables:
   `JWT_SECRET=your_jwt_secret`

### Running the Project

1. Start the server:
   `node index.js`
   
2. The server will start on `http://localhost:3000`.

### API Endpoints

- **POST /api/login**
  - Login with email and password to receive a JWT token.
  
- **GET /api/profile**
  - Retrieve the user profile (requires JWT token in the Authorization header).

### Test Users

Below are the test users that can be used to test the login functionality:

| Email                | Password  | Username |
|----------------------|-----------|----------|
| user@example.com     | password  | testuser |

### Environment Variables

The following environment variables are required to run the project:

- `JWT_SECRET`: Secret key used to sign JWT tokens.

### Example `.env` File

`JWT_SECRET=your_jwt_secret`

## License
This project is licensed under the MIT License.
