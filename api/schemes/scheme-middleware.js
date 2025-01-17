const db = require('../../data/db-config')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  const check = await db('schemes as sc')
    .where('scheme_id', req.params.scheme_id)
  return check.length > 0 ? next() : res.status(404).json({message: `scheme with scheme_id ${req.params.scheme_id} not found`})
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const {scheme_name} = req.body
  console.log(typeof scheme_name)
  if(scheme_name == null || typeof scheme_name !== 'string' || scheme_name.trim() === '' ){
    return res.status(400).json({"message": "invalid scheme_name"})
  }else{
    next()
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  
  const {step_number, instructions} = req.body

  if(step_number < 1 || typeof step_number !== 'number' || instructions == null || instructions.trim() === ''){
    return res.status(400).json({"message": "invalid step"})
  }else{
    next()
  }

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
