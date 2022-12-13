// Method: GET

const Travel = require('../models/Travel_model')

// Desc: GET all travel books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find()

    res.status(200).json({
      message: 'Success',
      travels
    })
  } catch (error) {
    res.send(err)
  }
}

// Method: GET
// Desc: GET one book by id
const getTravelById = async (req, res) => {
  try {
    const travels = await Travel.find()

    res.status(200).json({
      message: 'Success',
      travels
    })
  } catch (error) {
    res.send(err)
  }
}

// Method: POST
// Desc: ADD new travel book
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body

    const newTravel = await Travel.create({
      title,
      image,
      descr
    })

    res.status(201).json({
      message: 'Success',
      newTravel
    })
  } catch (error) {
    res.send(err)
  }
}

// Method: PUT
// Desc: Edit Travel book by id
const editTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr
    })

    res.status(200).json({
      message: 'Success',
      updatedTravel
    })
  } catch (error) {
    res.send(err)
  }
}

// Method: Delete
// Desc: Delete Travel book by id
const deleteTravelBook = async (req, res) => {
  try {
    await Travel.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: 'Deleted'
    })
  } catch (error) {
    res.send(err)
  }
}

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  editTravelBook,
  deleteTravelBook
}
