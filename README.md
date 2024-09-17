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
- **Responses**:
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
- **Responses**:
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
