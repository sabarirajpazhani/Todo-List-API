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

## API Endpoints
### 1. Create a Todo
- **URL**: `/api/v1/todo`
- **Method**: `POST`
- **Description**: Creates a new todo item.
- **Request Body**:
