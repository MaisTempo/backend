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
    },
    async id (req, res) {
        const {finalidadeId} = req.params;

        const finalidade = await finalidadeModel.findById(finalidadeId);
        if (!finalidade) {
            return  res.status(400).json({error: 'Finalidade não cadastrada.'});
        }

        return res.json(finalidade);
    },
    async bot (req, res) {
        const { resposta, controle } = req.body;

        const finalidadeId = controle[resposta]
        const finalidade = await finalidadeModel.findById(finalidadeId);
        if (!finalidade) {
            return  res.status(400).json({error: 'Finalidade não cadastrada.'});
        }

        const entidade = await entidadeModel.findById(finalidade.entidade)
        if (!entidade) {
            return  res.status(400).json({error: 'Entidade não cadastrada.'});
        }

        return res.json({"mensagem": finalidade.fluxo, "descricao": finalidade.descricao,
                            "finalidade": finalidade.name, "entidade": entidade.name})
    }
};