const {body, validationResult} = require("express-validator");

exports.createWash = (req, res, next) => {
    body('name', 'title must min 3 size word').isLength({min: 3});
    body('address', 'title must min 3 size word').isLength({min: 3});
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
}