const Restaurants = require('../models/Restaurants.json');

exports.getRestaurantByCityName = (req,res) => {
    const cityName = req.params.cityname;
    const result = Restaurants.filter(item => item.city === cityName)
    res.status(200).json({
        message:'Restaurant list by City Name Fetched',
        restaurant : result
    })
}