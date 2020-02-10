const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Notes
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    create: function(req, res) {
        db.Notes
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }
};