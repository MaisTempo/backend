const empresaModel = require('../models/empresa');

module.exports = {
    async index (req, res) {
        const empresas = await empresaModel.find();
        return res.json(empresas);
    },
    async store (req, res) {
        const { name } = req. body;

        const empExist = await empresaModel.findOne({name: name});

        if (empExist) {
            return res.json(empExist);
        }

        const empresa = await empresaModel.create({
            name: name
        });

        return res.json(empresa);
    }
};