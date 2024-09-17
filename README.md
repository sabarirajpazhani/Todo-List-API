# Todo API

This is a simple Todo API built using Express and MongoDB, which allows you to perform CRUD operations on todo items.

## Features

1. **Create Todo**:
   - Add new tasks to your todo list with a simple POST request.
   - Ensures that duplicate tasks cannot be added.

2. **View All Todos**:
   - Retrieve a list of all your todo tasks using a GET request.
   - Provides a structured JSON response with all available tasks.

3. **View a Single Todo**:
   - Fetch details of a specific todo by its unique ID.
   - Helps track the status of individual tasks.

4. **Update Todo**:
   - Update the details of any task, including marking it as completed or modifying the task description.
   - Partial updates allowed using a PATCH request.

5. **Delete Todo**:
   - Delete tasks by their ID, keeping your todo list clutter-free.
   - Ensures error handling for non-existent tasks.


Here's the API documentation for your GitHub README file:

markdown
Copy code
# Todo API

This is a simple Todo API built using Express and MongoDB, which allows you to perform CRUD operations on todo items.

## Prerequisites

- Node.js
- MongoDB
- Postman or similar API testing tool

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    DB_URL=mongodb://localhost:27017/todoDB
    ```
4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints
### 1. Create a Todo
