const Notes = require("../models/Notes");

exports.listAll (req, res, next) {
    Notes.find({}, function (err, notes) {
        if (err)
        return next(err);
        res.json(notes)
    });
}