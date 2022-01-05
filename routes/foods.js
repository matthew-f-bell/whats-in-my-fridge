/*=============================================
==          This is the routes/foods         ==
=============================================*/

// external requires
const router = require("express").Router;
const ctrl = require("../controllers");

// Rest Routes as a guide
/*
 * Index - GET - /articles - Presentational - respond with all articles
 * New - GET - /articles/new  - Presentational Form - a page with a form to create a new article
 * Show - GET - /articles/:id  - Presentational - respond with specific article by id 
 * Create - Post - /articles - Functional - recieve data from new route to create an article
 * Edit - GET - /articles/:id/edit  - Presentational Form - respond with a form prefilled with article data
 * Update - PUT - /articles/:id  - Functional - recieve data from edit to update a specific article 
 * Delete - DELETE - /articles/:id  - Functional - Deletes article by id from request
 */

// create routes
router.get("/", ctrl.foods.idx);
router.get("/new", ctrl.foods.newFood);
router.get("/:id", ctrl.foods.show);
router.post("/", ctrl.foods.create);
router.put("/:id", ctrl.foods.update);
router.delete("/:id", ctrl.foods.destroy);
router.get("/:id/edit", ctrl.authors.edit);


// export the routes created with router
module.exports = router ;