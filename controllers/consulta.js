const finalidadeModel = require('../models/finalidade');
const entidadeModel = require('../models/entidade')

module.exports = {
    async index (req, res) {
        const {entidadeId} = req.params;

        const entidade = await entidadeModel.findById(entidadeId);
        if (!entidade) {
            return  res.status(400).json({error: 'Entidade não cadastrada.'});
        }

        const finalidades = await finalidadeModel.find({entidade: entidade._id});
        return res.json(finalidades);
    }
};