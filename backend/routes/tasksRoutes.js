const express = require('express')
const router =  express.Router()
const {getTasks, setTask, upDateTask, deleteTask} = require('../controllers/tasksControllers')

// router.route('/').get(getTasks).post(setTask)

router.get('/',getTasks)
router.post('/', setTask)


// router.route('/:id').delete(deleteTask).put(upDateTask)

router.put('/:id',upDateTask)
router.delete('/:id', deleteTask)



module.exports = router