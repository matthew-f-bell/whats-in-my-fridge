/*=============================================
==          This is the routes/foods         ==
=============================================*/

// require db access and schema
const db = require("../models");

// Rest Routes as a guide. Important they are in this order so that they don't conflict
/*
 * Index - GET - /articles - Presentational - respond with all articles
 * New - GET - /articles/new  - Presentational Form - a page with a form to create a new article
 * Show - GET - /articles/:id  - Presentational - respond with specific article by id 
 * Create - Post - /articles - Functional - recieve data from new route to create an article
 * Edit - GET - /articles/:id/edit  - Presentational Form - respond with a form prefilled with article data
 * Update - PUT - /articles/:id  - Functional - recieve data from edit to update a specific article 
 * Delete - DELETE - /articles/:id  - Functional - Deletes article by id from request
 */

// Index

const idx = (req, res) => {
    db.Food.find({}, function (err, allFoods) {
        if (err) return res.send(err);
        const context = { foods: allFoods };
        return res.render("foods/index", context);
    });
};

// Show

const show = (req, res) => {
    console.log(req.params.id);
    db.Food.findById(req.params.id, function (err, foundFood) {
        if (err) return res.send(err);

        const context = { food: foundFood };
        return res.rencder("food/show", context);
    });
};

// New

const newFood = (req, res) => {
    db.Food.create(req.body, function (err, createdFood) {
        if (err) return res.send(err);

        return res.redirect("/foods");
    });
};

// Update

const update = (req, res) => {
    db.Food.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        (err, updatedFood) => {
            if (err) return res.send(err);
            return res.redirect(`/foods/${updatedFood._id}`);
        }
    );
};

// Delete

const destroy = (req, res) => {
    db.Food.findByIdAndDelete(req.params.id, (err, deletedFood) => {
        if (err) return res.send(err);

        return res.redirect("/foods");
    });
};

// export all the controller functions
module.exports = {
    idx,
    show,
    create,
    newFood,
    edit,
    update,
    destroy,
};