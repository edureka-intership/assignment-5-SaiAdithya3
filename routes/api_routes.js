const express = require('express');

// import all the controller components
var CityListController = require('../controllers/city');
var RestaurantController = require('../controllers/restaurant');
var MealtypeController = require('../controllers/mealtype');

// initialize the express router
const router = express.Router();

// register all the routes
router.get('/getCityList', CityListController.getCityList);
router.get('/getRestaurantByCityName/:cityname', RestaurantController.getRestaurantByCityName);
router.get('/getMealtypes', MealtypeController.getMealtypes);

// export the routes
module.exports = router;