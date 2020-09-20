const { Schema, model } = require('mongoose');

const FinalidadeSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    fluxo: [{
        type: String,
        required: true
    }],
    entidade: {
        type: Schema.Types.ObjectId,
        ref: 'Entidade'
    }
}, {
    timestamps: true,
}); // createdAt, updatedAt - criado automático e atualizado pelo mongoose pela estrutura timestamp adicionada ao final

module.exports = model('Finalidade', FinalidadeSchema);