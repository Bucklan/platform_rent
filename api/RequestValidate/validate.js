import {body, validationResult} from "express-validator";

export const createEvent = [
    body('title', 'title must min 3 size word').isLength({min: 3}),
    body('date', 'date must more 1950 and little now year').isInt({min: Date.now()}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]