const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
  res.json(
    [
      'C',
      'C++',
      'C#'
    ]
  )
})

module.exports = router
