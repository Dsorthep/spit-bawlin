const Resources = require("../models/Resources");

exports.listAll (req, res, next) {
    Resources.find({}, function (err, Resources) {
        if (err)
        return next(err);
        res.json(Resources)
    });
}