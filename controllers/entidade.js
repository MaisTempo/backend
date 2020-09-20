const entidadeModel = require('../models/entidades');

module.exports = {
    async index (req, res) {
        const entidades = await entidadeModel.find();
        return res.json(entidades);
    },
    async store (req, res) {
        const { name } = req. body;

        const entiExist = await entidadeModel.findOne({name: name});

        if (entiExist) {
            return res.json(entiExist);
        }

        const entidade = await entidadeModel.create({
            name: name
        });

        return res.json(entidade);
    }
};