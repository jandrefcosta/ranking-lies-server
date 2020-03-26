const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const lies = await connection('lies').select('*')
        return response.json(lies)
    },
    async create(request, response) {
        const { resumo, descricao } = request.body
        user_id = request.headers.authorization
        const [id] = await connection('lies').insert({
            resumo,
            descricao,
            user_id,
        })
        return response.json(id)
    },

    async delete(request, response) {
        const { id } = request.params
        user_id = request.headers.authorization

        const lie = await connection('lies').where('id', id).select('user_id').first();

        if (lie === undefined) {
            return response.status(404).json({ error: 'Item not found' })
        } else if (user_id !== lie.user_id) {
            return response.status(401).json({ error: 'Operation not permited' })
        }

        await connection('lies').where('id', id).delete();

        return response.status(204).send()
    }
}