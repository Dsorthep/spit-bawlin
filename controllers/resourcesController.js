const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Resources
        .find(req.query)
        .sort(req.body.title)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    create: function(req, res) {
        db.Resources
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }
};