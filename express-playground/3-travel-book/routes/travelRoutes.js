const { Router } = require('express')
const router = Router()
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  editTravelBook,
  deleteTravelBook
} = require('../controllers/travelControllers')

router.get('/', getAllTravels)
router.post('/add', addTravelBook)
router.get('/:id', getTravelById)
router.get('/:id', editTravelBook)
router.get('/:id', deleteTravelBook)

module.exports = router
