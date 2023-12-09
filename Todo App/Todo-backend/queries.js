// Todo List queries 

let getTodo = 'select task_name, task_id from TaskList where user_id = ?';
let addTodo = 'insert into TaskList(user_id, task_name) values (?,?)';
let updateTodo = 'update TaskList set task_name = ? where task_id = ?';
let deleteTodo = 'delete from TaskList where task_id= ?';


// User queries

let loginTodo = 'select user_id from Users where email = ? and password= ?';
let signupTodo = 'INSERT INTO Users(username,email,password) VALUES(?,?,?)';


module.exports = {getTodo, addTodo, updateTodo, deleteTodo, loginTodo, signupTodo};