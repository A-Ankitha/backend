const express = require('express')
const task = express.Router()
const {allUsers, singleUser, createUser, updateUser, deleteUser} = require("../controller/controller")
task.use(express.json())

//get all the data
task.get('/', allUsers)  

//get a particular data
task.get('/:id', singleUser) 

//post a new user
task.post('/', createUser)

//update a user
task.put('/:id', updateUser)

//delete a user
task.delete('/:id', deleteUser)

module.exports = {task}
