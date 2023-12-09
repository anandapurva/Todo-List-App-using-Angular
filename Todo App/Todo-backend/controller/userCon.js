const query = require('../queries')

const userLogin = (req,res) =>{
    const email = req.body.email
    const password = req.body.password
  
    db.query(query.loginTodo, [email, password],(err, result) => {
      if (err){ throw err}
     else if (result.length > 0) {   // checks the 'result' variable to see if there are any rows returned from the query
        console.log("login successfull!")  // If results contains one or more rows, it means that a user with the provided username and password exists, and it logs "login successful."
        let payload = { subject: result[0].user_id }
        let token = jwt.sign(payload, 'secretkey')
        // console.log(token)
        res.send({
          token,
          data: result
        })
        //  res.send({token})
      }
      else {
        res.status(401).send({msg:'please provide correct credentials'})
      }
    })
}

const userSignUp = (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  
    
    db.query(query.signupTodo,[username, email, password], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Error registering user');
      } else {
        let payload = { subject: result._id }
        let token = jwt.sign(payload, 'secretkey')
        res.status(200).send({ token })
      }
    })
}


module.exports = {userLogin, userSignUp};