const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*')
        return response.json(users)
    },

    async create(request, response) {
        const { email, senha } = request.body
        const alreadyRegistered = await connection('users').where('email', email).select('*').first()
        if (alreadyRegistered) {
            return response.json({ error: 'Email já cadastrado' })
        }
        const id = crypto.randomBytes(4).toString('HEX')
        await connection('users').insert({
            id,
            email,
            senha
        })
        return response.json(id)

    }
}