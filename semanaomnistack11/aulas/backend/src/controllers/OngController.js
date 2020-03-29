
const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async create(request, response) {
        const {name='APAD1', email='contato1@apad.com.br', whatsapp='471000000', city='Rio do Sul', uf='SC'} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json(id);
    }

};