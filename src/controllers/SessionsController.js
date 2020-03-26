const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { email } = request.body;
        const user = await connection('users').where('email', email).select('*').first()
        if (!user) {
            return response.status(400).json({ error: 'Email not found' })
        }
        return response.json(user)
    }
}