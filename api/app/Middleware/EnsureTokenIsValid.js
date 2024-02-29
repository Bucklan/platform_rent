const {verify} = require("jsonwebtoken");

exports.verifyToken = (req, res, next)=> {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({error: 'Unauthorized access'});

    verify(token.split(' ')[1], 'secret123', (err, decoded) => {
        if (err) return res.status(403).json({error: 'Token is not valid'});
        req.user = decoded;
        next();
    });
}