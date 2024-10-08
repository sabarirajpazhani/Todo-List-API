# Todo API

![6602b4df0dc0803509452086_Ultimate Guide to Data Extraction API](https://github.com/user-attachments/assets/a06281b4-5ea2-405a-8c4b-6f477cc87f50)

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

![tiny-man-woman-standing-near-list-couple-ticking-off-items-check-list-flat-vector-illustration-daily-routine-busy-lifestyle-concept-banner-website-design-landing-web-page_74855-22067](https://github.com/user-attachments/assets/deb82355-7422-4b8a-8b20-29a1a1fb7ab5)


## API Endpoints
### 1. Create a Todo
- **URL**: `/api/v1/todo`
- **Method**: `POST`
- **Description**: Creates a new todo item.
- **Request Body**:
```javascript
    exports.todoCreating=async(req, res, next)=>{
       try{
           const {task} = req.body;
       
           if(!task){
               return res.status(400).json({
                   message:"Task field is required"
               })
           }
   
           let tasks = await todoModel.findOne({task});
           if(tasks){
               return res.status(409).json({
                   message:"Taks already Exists"
               })
           }
           tasks = new todoModel({task});
           await tasks.save();
   
           res.status(200).json({
               message:"New Todo Created Successfully"
           })
       }
       catch(err){
           res.status(500).json({
               message:"Internal Server Error"
           })
       }
   }
````

### 2. Get All Todos
- **URL**: `/api/v1/todo`
- **Method**: `GET`
- **Description**: Retrieves all todo items.
- **Request Body**:
```javascript
exports.getTodoGeting = async (req,res,next)=>{
    try{
        const todos = await todoModel.find({});
        if(!todos.length){
            return res.status(404).json({
                message:"No Todos Found"
            })
        }
        res.json({
            todos
        })
    }
    catch(err){
        res.status(500).json({
            message:"Server Error, Please try again Later"
        })
    }
}
```

### 3. Get a Single Todo

- **URL**: `/api/v1/todo:id`
- **Method**: `GET`
- **Description**: Retrieves a single todo item by its ID.
- **Request Body**:
```javascript
exports.getTodoSingle=async(req,res,next)=>{
    try{
        const todoID = await todoModel.findById(req.params.id);

        if(!todoID){
            return res.status(404).json({
                message:"Todo Not Found"
            })
        }
        res.json({
            todoID
        })
    }
    catch(err){
        res.status(500).json({
            message: "An error occurred while retrieving the todo"
        })
    }
}
```

### 4. Update a Todo

- **URL**: `/api/v3/todo/:id`
- **Method**: `PATCH`
- **Description**: Updates an existing todo item by its ID.
- **Request Body**:
```javascript
exports.todoUpdating = async(req,res,next)=>{
    try{
        const task = req.body.task;
        const completed = req.body.completed;

        const todo = await todoModel.findById(req.params.id);
        if(!todo){
            return res.status(404).json({
                message:"Todo not found"
            })
        }

        if(task!==undefined){
            todo.task = task;
        }
    
        if(completed!==undefined){
            todo.completed = completed;
        }
        
        const updateTodo = await todo.save();
        res.json({
            message:"Updated Successfully",
            updateTodo
        })
    }
    catch(err){
        res.status(500).json({
            message:"Internal Server error"
        })
    }
```
### 5. Delete a Todo

- **URL**: `/api/v4/todo/:id`
- **Method**: `DELETE`
- **Description**: Deletes a todo item by its ID.
- **Request Body**:
```javascript
exports.todoDeleting = async (req, res, next) => {
    try {
        const todo = await todoModel.findById(req.params.id); 
        if (!todo) {
            return res.status(404).json({
                message: "Todo Not Found"
            });
        }

        await todoModel.findByIdAndDelete(todo); 
        res.json({
            message: "Todo Deleted Successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server error"
        });
    }
};
```

## MongoDB Schema
The Todo API uses a simple and efficient MongoDB schema to store and manage tasks. Each todo item consists of a `task` field (a string that holds the description of the task) and a `completed` field (a boolean indicating whether the task is done or not). Additionally, every task is automatically timestamped with a `created_at` field to track when it was added. This schema ensures flexibility and scalability, allowing easy storage and retrieval of todos.

```javascript
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todo', todoSchema);
```

## Database Connection
The API connects to a MongoDB database using the following configuration:
```javascript
const mongoose = require('mongoose');

const connectDatabase = () => {
    return mongoose.connect(process.env.DB_URL).then((con) => {
        console.log("Mongoose connected to host:" + con.connection.host);
    });
};

module.exports = connectDatabase;
```
## Database Configuration
The API uses MongoDB for storing movie and booking data. You can connect the database by setting the `DB_URL` in the `.env` file.

### Database Visuals
![image](https://github.com/user-attachments/assets/5130c62e-480c-440f-9c19-5aac72ec0a82)


## API Testing Visuals

### 1. Get All Task

![image](https://github.com/user-attachments/assets/1acccb57-4b82-4794-8dcc-88b5acaf561e)

### 2. Get Single Task

![image](https://github.com/user-attachments/assets/44d6625d-65af-48d7-9523-2c8c663fd761)

### 3. Creating the Task

![image](https://github.com/user-attachments/assets/f4cfb44b-3154-49ab-aa99-2c583c29cbe7)

### 4.  Updating Task

![image](https://github.com/user-attachments/assets/28cd2190-5f06-43ae-b93f-b903290bd8a3)

### 5. Delete Todo

![image](https://github.com/user-attachments/assets/35b6f557-8c1f-4f73-9df1-26e02e40b944)

## Technologies Used
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

# API Testing Tools

When developing and testing APIs, it's crucial to use reliable tools to ensure that your endpoints function as expected. Here are some popular API testing tools that you can use:

## 1. Thunder Client

**Thunder Client** is a lightweight REST API client extension for Visual Studio Code. It provides a clean and user-friendly interface for sending HTTP requests and analyzing responses.

- **Installation**: Available as a Visual Studio Code extension.
- **Website**: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

<div align="center">
  <img src="https://github.com/user-attachments/assets/a4ae7be2-6284-4898-83ac-313dc85ee238" alt="insomnia-logo" width="200"/>
</div>

## 2. Postman API

**Postman** is one of the most widely used API testing tools. It offers a comprehensive suite of features for designing, testing, and managing APIs.

- **Installation**: Available as a standalone application for Windows, macOS, and Linux.
- **Website**: [Postman](https://www.postman.com/)

<div align="center">
  <img src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" alt="insomnia-logo" width="200"/>
</div>

## 3. Insomnia

**Insomnia** is another powerful REST API client that allows you to test and debug APIs with ease. It provides a simple interface and features for creating and managing requests.

- **Installation**: Available as a standalone application for Windows, macOS, and Linux.
- **Website**: [Insomnia](https://insomnia.rest/)

<div align="center">
  <img src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png" alt="insomnia-logo" width="200"/>
</div>


## Usage

To test your API, you can use any of these tools to:

1. **Send Requests**: Configure and send various types of HTTP requests (GET, POST, PUT, DELETE, etc.) to your API endpoints.
2. **Analyze Responses**: View and analyze the responses from your API, including status codes, response times, and data.
3. **Automate Testing**: Some tools offer automation features to run tests and monitor API performance over time.


### Examples

- **Thunder Client**: Open Visual Studio Code, install the Thunder Client extension, and use the UI to create and send requests.
- **Postman**: Launch Postman, create a new request, configure the endpoint and method, and send the request to view the response.
- **Insomnia**: Open Insomnia, create a new request, specify the API endpoint and parameters, and view the results.
