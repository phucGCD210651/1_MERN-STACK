//When you're working with asynchronous code in Express.js, such as using promises or async/await, errors thrown inside route handlers may not be caught by Express's default error handling mechanism.
//express-async-handler helps to streamline error handling in such scenarios by automatically catching errors and passing them to Express's error handling middleware.
const asyncHandler = require('express-async-handler')
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get goals '})
})

// @desc Get goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text feild')
    }
    res.status(200).json({message: 'Set goal'})
})

// @desc Get goals
// @route UPDATE /api/goals
// @access Private
const updateGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Get goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:  `Delete goal ${req.params.id}`})
})

module.exports = {getGoals , setGoals, updateGoals, deleteGoals}