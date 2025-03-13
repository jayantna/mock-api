# Status API

A simple Express.js application that provides status APIs with an admin panel UI for status management.

## Features

- Random status API that returns either "pending" or "delivered"
- Admin-controlled status API that returns a configurable status
- Admin UI for managing status settings
- Real-time API testing interface

## How to Use This Code

### 1. Project Setup:
* Create a new directory for your project
* Initialize with `npm init -y`
* Install dependencies: `npm install express body-parser`
* Save the first code snippet as `server.js`
* Create a `public` folder and save the HTML file as `public/index.html`

### 2. Running the Application:
* Start the server with `node server.js`
* Open a browser and go to `http://localhost:3000`

### 3. API Endpoints:
* `GET /api/status/random` - Returns a random status from ['pending', 'delivered']
* `GET /api/status/admin` - Returns the status set by the admin
* `POST /api/admin/status` - Updates the admin status (accepts 'pending', 'delivered', or 'unknown')

## Admin UI Features

The admin UI allows you to:
* Set the status using a dropdown menu
* Test both APIs with the click of a button
* View API responses in real-time

## Response Format

All APIs return JSON responses with the following format:

```json
{
  "status": "pending|delivered|unknown",
  "timestamp": "2025-03-13T12:34:56.789Z"
}
```

## Dependencies

- Express.js
- body-parser

## License

MIT