const express = require('express')
const app = express()
const cors = require('cors'); //  if angular application and Express.js server run on different ports,enable CORS
app.use(cors())
const bodyParser = require('body-parser')
global.jwt = require('jsonwebtoken') 

global.db  = require('./mySQL')

const userRouter = require("./routes/userRoute");
const taskRouter = require("./routes/taskRoute");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const port = 3000

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Apurva@123',
//   database: 'TodoList',
//   port: '3306'
// })

// db.connect((err) => {
//   if (err) throw err
//   else
//     console.log('Connected to MySQL Database')
// })



// function verifyToken(req, res, next) {
//   if(!req.headers.authorization) {
//        return res.status(401).send('Unauthorized request')
//   }
//   let token = req.headers.authorization.split(' ')[1]
//   if(token == 'null') {
//     return res.status(401).send('Unauthorized request')
//   }
//   let payload = jwt.verify(token, 'secretKey')
//   if(!payload) {
//     return res.status(401).send('Unauhorized request')
//   }
//   req.user_id = payload.subject
//   next()
// }

// Register a new user

// app.post('/signup', (req, res) => {
  // const username = req.body.username;
  // const email = req.body.email;
  // const password = req.body.password;

  // let qry = `INSERT INTO Users(username,email,password) VALUES('${username}','${email}','${password}')`;
  // db.query(qry, (err, result) => {
  //   if (err) {
  //     console.error('Error registering user:', err);
  //     res.status(500).send('Error registering user');
  //   } else {
  //     let payload = { subject: result._id }
  //     let token = jwt.sign(payload, 'secretkey')
  //     res.status(200).send({ token })
  //   }
  // })
// }
// )


// User login 

// app.post('/login', (req, res) => {
//   const email = req.body.email
//   const password = req.body.password

//   let qry = `select user_id from Users where email = '${email}' and password='${password}';`

//   db.query(qry, (err, result) => {
//     if (err) throw err
//     if (result.length > 0) {   // checks the 'result' variable to see if there are any rows returned from the query
//       console.log("login successfull!")  // If results contains one or more rows, it means that a user with the provided username and password exists, and it logs "login successful."
//       let payload = { subject: result[0].user_id }
//       let token = jwt.sign(payload, 'secretkey')
//       // console.log(token)
//       res.send({
//         token,
//         data: result
//       })
//       //  res.send({token})
//     }
//     else {
//       alert('Enter Correct Credentials')
//       console.log('Enter Correct Credentials')
//     }
//   })

// })

 // getting the tasks from the database

//  app.get('/todolist/:user_id', (req, res) => {
  // let id = req.params.user_id
  // let q = `select task_name, task_id from TaskList where user_id = ${id}`
  // console.log(id)
  // try {
  //   db.query(q, (err, results) => {
  //     if (err) throw err
  //     else {
  //       res.send({
  //         results
  //       })
  //     }
  //   })
  // }
  // catch (err) {
  //   console.log('error is ', err)
  // }

// })

// Updating the task

// app.put('/todolist/update/:user_id', (req, res) => {
  // let taskId = req.body.task_id
  // let taskName = req.body.task_name
  // let q = `update TaskList set task_name = '${taskName}' where task_id = ${taskId}`
  // db.query(q, (err, result) => {
  //   if (err) throw err
  //   else {
  //     res.send({
  //       message: "Task Updated"
  //     })
  //   }
  // })
// })

 // deleting the tasks in the databse

//  app.delete('/todolist/delete/:taskId', (req, res) => {
  // let taskId = req.params.taskId
  // console.log(taskId)
  // let q = `delete from TaskList where task_id='${taskId}'`
  // db.query(q, (err, result) => {
  //   if (err) throw err
  //   else {
  //     res.send({
  //       message: "Task Deleted from db"
  //     })
  //   }
  // })
// })


// add task into database

// app.post('/todolist/:user_id', (req, res) => {
  // let task = req.body.taskname;
  // let userid = req.params.user_id
  // console.log(userid);
  // try {
  //   let q = `insert into TaskList(user_id, task_name) values('${userid}','${task}')`;
  //   db.query(q, (err, results) => {
  //     if (err) throw err
  //     else {

  //       res.send({ message: 'Data added successfully' })
  //     }
  //   })
  // }
  // catch (err) {
  //   console.log('error is ', err)
  // }
//})


  app.use("/", userRouter);
  app.use("/todolist", taskRouter);







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

