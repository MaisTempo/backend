const entidade = require('../models/entidade');
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
    },
    async bot (req, res) {
        const entidades = await entidadeModel.find();
        const dict = {}
        message = ''
        for (var i = 0; i < entidades.length; i++) {
            message += `${i+1}: ${entidades[i]['name']}\n`
            dict[i+1] = entidades[i]['_id']
        }

        return res.json({"mensagem":message, "controle":dict});
    }
};