const City = require('../models/City.json'); // import city json data from models

// API for getCityList function : to get all cities

exports.getCityList = (req,res) =>{
    const result = City.map(item => item.name);
    res.status(200).json({
        message : 'City list loaded successfully',
        city: result
    })
}