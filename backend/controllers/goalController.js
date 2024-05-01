//When you're working with asynchronous code in Express.js, such as using promises or async/await, errors thrown inside route handlers may not be caught by Express's default error handling mechanism.
//express-async-handler helps to streamline error handling in such scenarios by automatically catching errors and passing them to Express's error handling middleware.
const asyncHandler = require('express-async-handler')
//adding model to controller
const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json({goals})
})

// @desc Get goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text feild')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json({goal})
})

// @desc Get goals
// @route UPDATE /api/goals
// @access Private
const updateGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found! ')
    }
    //this will find the goal id update it if the atribute is correctly enter if not it wont add new atribute or anything else
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new: true // this use to make a new one if this id not exist
    })

    res.status(200).json(updatedGoal)
})

// @desc Get goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found! ')
    }

    // await Goal.deleteOne({ _id: req.params.id }); //we write id but in the database it store as _id
    // await goal.remove() deprecated in Mongoose 6 
    res.status(200).json({id: req.params.id})
})

module.exports = {getGoals , setGoals, updateGoals, deleteGoals}