import { Schema, model } from 'mongoose';

const EmpresaSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
}); // createdAt, updatedAt - criado automático e atualizado pelo mongoose pela estrutura timestamp adicionada ao final

export default model('Empresa', EmpresaSchema);