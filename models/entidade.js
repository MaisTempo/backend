const { Schema, model } = require('mongoose');

const EntidadeSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
}); // createdAt, updatedAt - criado automático e atualizado pelo mongoose pela estrutura timestamp adicionada ao final

module.exports = model('Entidade', EntidadeSchema);