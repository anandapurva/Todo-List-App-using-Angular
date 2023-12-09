const express = require('express')
const taskRouter = express.Router() 
const {addTask ,getAllTask, updateTask, deleteTask} = require("../controller/taskCon");

taskRouter.post("/add/:user_id",addTask);
taskRouter.get("/showAll/:user_id",getAllTask);
taskRouter.put("/update/:user_id",updateTask);
taskRouter.delete("/delete/:taskId",deleteTask);


module.exports = taskRouter;