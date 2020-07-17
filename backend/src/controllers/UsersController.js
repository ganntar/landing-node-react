const connection = require('../database/connection');
const session = require('./SessionController');

module.exports = {
    async index(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);
        if(validation === false){
            return response.status(400).json({ error: "Usuario não Autenticado!"});
        }

        const {id_usuario, nome_usuario, email_usuario} = await connection('usuarios')
            .select('*')
            .where({email_usuario: email,
                    senha_usuario: senha})
            .first();

        return response.json({id_usuario, nome_usuario, email_usuario})
    },

    async create(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { nome_usuario, senha_usuario, email_usuario} = request.body;

        const [id] = await connection('usuarios').insert({
            nome_usuario,
            senha_usuario,
            email_usuario,
        });

        return response.json({id, nome_usuario, email_usuario});
    },

    async update(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { nome_usuario} = request.body;

        if(!nome_usuario){
            return response.status(401).json({error: 'Nome de usuario Vazio!'});
        }

        const result = await connection('usuarios')
                            .update('nome_usuario', nome_usuario)
                            .where('email_usuario','=',email);

        if(!result){
            return response.status(401).json({error: 'Erro ao alterar nome!'});
        }
        
        return response.status(204).send();

    }

};