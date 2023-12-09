const query = require('../queries')

const getAllTask = (req, res) => {
    let id = req.params.user_id
    try {
      db.query(query.getTodo, [id], (err, results) => {
        if (err) throw err
        else {
          res.send({
            results
          })
        }
      })
    }
    catch (err) {
      console.log('error is ', err)
      res.status(404).send({message:"Error while getting All task"})
    }
  

}

const addTask =  (req, res) => {
    let task = req.body.taskname;
    let userid = req.params.user_id
    console.log(userid);
    try {
      db.query(query.addTodo,[userid,task] ,(err, results) => {
        if (err) throw err
        else {
  
          res.send({ message: 'Data added successfully' })
        }
      })
    }
    catch (err) {
      console.log('error is ', err)
    }

}

const updateTask =  (req, res) => {
    let taskId = req.body.task_id
    let taskName = req.body.task_name
    db.query(query.updateTodo,[ taskName, taskId],(err, result) => {
      if (err) throw err
      else {
        res.send({
          message: "Task Updated"
        })
      }
    })
    
}

const deleteTask =  (req, res) => {
    let taskId = req.params.taskId
    console.log(taskId)
    db.query(query.deleteTodo,[taskId], (err, result) => {
      if (err) throw err
      else {
        res.send({
          message: "Task Deleted from db"
        })
      }
    })
    
}



module.exports = { addTask, getAllTask, updateTask,  deleteTask};