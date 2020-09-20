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
        const entidadesNames = []
        for (var i = 0; i < entidades.length; i++) {
            entidadesNames.push(entidades[i]["name"])
        }
        entidadesNames.sort()
        message = ''
        for (var i = 0; i < entidadesNames.length; i++) {
            message += `${i+1}: ${entidadesNames[i]}\n`
        }

        return res.json({"mensagem":message});
    }
};