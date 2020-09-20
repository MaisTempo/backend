const { Schema, model } = require('mongoose');

const EmpresaSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
}); // createdAt, updatedAt - criado automático e atualizado pelo mongoose pela estrutura timestamp adicionada ao final

module.exports = model('Empresa', EmpresaSchema);