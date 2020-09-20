const finalidadeModel = require('../models/finalidade');
const entidadeModel = require('../models/entidade')

module.exports = {
    async index (req, res) {
        const finalidades = await finalidadeModel.find();
        return res.json(finalidades);
    },
    async store (req, res) {
        const { name, fluxo, descricao, entidadeId } = req. body;

        const entidade = await entidadeModel.findById(entidadeId);
        if (!entidade) {
            return  res.status(400).json({error: 'Entidade não cadastrada.'});
        }

        const finalidadeExist = await finalidadeModel.findOne({name: name, entidade: entidade._id});
        if (finalidadeExist) {
            return res.json(finalidadeExist);
        }

        const finalidade = await finalidadeModel.create({
            name: name,
            entidade: entidade._id,
            descricao: descricao,
            fluxo: fluxo
        });

        return res.json(finalidade);
    }
};