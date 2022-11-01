
//@desc   Gets goals
//@route  GET /api/goals
//@access Private
const getGoal = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}

//@desc   Set goals
//@route  POST /api/goals
//@access Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}

//@desc   updates goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

//@desc   delete goals
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}