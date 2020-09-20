const entidadeModel = require('../models/entidade');

module.exports = {
    async index (req, res) {
        const entidades = await entidadeModel.find();
        return res.json(entidades);
    },
    async store (req, res) {
        const { name, url } = req. body;

        const entiExist = await entidadeModel.findOne({name: name});

        if (entiExist) {
            return res.json(entiExist);
        }

        const entidade = await entidadeModel.create({
            name: name,
            url: url
        });

        return res.json(entidade);
    }
};