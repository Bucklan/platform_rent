const Wash = require("../Model/Wash");

exports.index = async (req, res) => {
    const wash = await Wash.find();
    res.json(wash);
}

exports.store = async (req, res) => {
    if (req.body.name === '' && req.body.address === '') {
        res.status(400).json({error: 'Name and address is required'});
    } else {
        const wash = new Wash(req.body);
        await wash.save();
        res.status(201).json(wash);
    }
}

exports.delete = async (req, res) => {
    await Wash.findByIdAndDelete(req.params.id);
    res.status(200).json({'message': 'ok'});
}
