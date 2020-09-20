import empresaModel from '../models/empresa';

module.exports = {
    async index (req, res) {
        const empresas = await empresaModel.find();
        return res.json(empresas);
    }
};