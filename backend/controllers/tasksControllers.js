const asyncHandler = require('express-async-handler')

const getTasks = asyncHandler( async (req,res) =>{
    res.status(200).json({message:'To Get tasks'})
})

const setTask = asyncHandler( async (req,res) =>{
    if(!req.body.text){
     res.status(400)
     throw new Error ('Enter a task')
    }
     res.status(201).json({message:'To Create task'})
})


const upDateTask = asyncHandler( async (req,res) =>{
    res.status(200).json({message:`To update task ${req.params.id}`})
})

const deleteTask = asyncHandler( async (req,res) =>{
    res.status(200).json({message:`To delete task ${req.params.id}`})
})

module.exports = {
    getTasks,
    setTask,
    upDateTask,
    deleteTask
    
}