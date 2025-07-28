const users = require('../model/model')

const allUsers = async (request, response) => {
    try {
        const user = await users.find({})
        if(!user){
            response.status(404).json({message: "no user found"})
        }
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json(error)
    }
}

const singleUser = async (request, response) => {
    try {
        const {id} = request.params
        const user = await users.findOne({_id:id}).select('-__v')
        if(!user){
            response.status(404).json({message: "no user found"})
        }
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json(error)
    }
}

const createUser = async (request, response) => {
    try {
        const user = await users.create(request.body)
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        //const user = await users.findOneAndUpdate({ _id: id },{ $set: {name, email} }).select('-__v')
        const user = await users.findOneAndUpdate({ _id: id },req.body,{new:true})
        if(!user){
            res.status(404).json({message:"no user found"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (request, response) => {
    try {
        const {id} = request.params
        const user = await users.findOneAndDelete({_id:id}).select('-__v')
        if(user===-1){
            response.status(404).json({message:"no user found"})
        }
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json(error)
    }
}

module.exports = { allUsers, singleUser, createUser, updateUser, deleteUser }