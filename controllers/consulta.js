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
    },
    async bot (req, res) {
        const { resposta, controle } = req.body;

        const entidadeId = controle[resposta]
        const entidade = await entidadeModel.findById(entidadeId);
        if (!entidade) {
            return  res.status(400).json({mensagem: 'Entidade não cadastrada.'});
        }

        const finalidades = await finalidadeModel.find({entidade: entidade._id});

        const dict = {}
        message = ''
        for (var i = 0; i < finalidades.length; i++) {
            message += `${i+1}: ${finalidades[i]['name']}\n`
            dict[i+1] = finalidades[i]['_id']
        }

        return res.json({"mensagem":message, "controle":dict, "entidade":entidade.name});
    }
};