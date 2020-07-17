const connection = require('../database/connection');
const session = require('./SessionController');

module.exports = {
    async index(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const id = await session.Subscription(email, senha);

        if(id <= 0){
            return response.status(404).json({error: 'Usuario não Encontrado!'});
        }

        const subs = await connection('inscricoes').select('*').where('email', email);

        return response.status(200).json(subs);
    },

    async create(request, response){

        const { cpf,
                nome,
                sobrenome,
                email,
                contato_1,
                senha,
                id_curso} = request.body;
        
        const [email_validation] = await connection('inscricoes').count().where('email', email);

        if(email_validation['count(*)'] > 0){
            return response.status(401).json({error: 'Email já esta cadastrado!'});
        }

        const [cpf_validation] = await connection('inscricoes').count().where('cpf', cpf);

        if(cpf_validation['count(*)'] > 0){
            return response.status(401).json({error: 'Cpf já esta cadastrado!'});
        }
        
        const [id] = await connection('inscricoes').insert({
            cpf,
            nome,
            sobrenome,
            email,
            contato_1,
            senha
        });

        await connection('curso_matricula').insert({fk_id_matricula: id, fk_id_curso: id_curso});

        return response.json({id});
    },
    
    async update(request, response){
        const emailp = request.headers.emailauthorization;
        const senhap = request.headers.senhaauthorization;

        const validation = await session.Subscription(emailp, senhap);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const { id_matricula,
                cpf,
                nome,
                sobrenome,
                email,
                contato_1,
                senha,
                id_curso} = request.body;
    
        await connection('inscricoes').update({
                    cpf,
                    nome,
                    sobrenome,
                    email,
                    contato_1,
                    senha
                }).where('id_matricula', id_matricula);
        
        await connection('curso_matricula').update({id_curso}).where('fk_id_matricula', id_matricula)

        return response.status(204).send();
    },


    //Ações ADM
    async indexAdm(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }
        const {page = 1} = request.query;

        const [count] = await connection('inscricoes').count();

        const subs = await connection('inscricoes')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Pages', count['count(*)'])

        return response.status(200).json(subs);

    },

    async deleteAdm(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const { ids, id_curso }  = request.body;

        if(ids == [0]){
            await connection('curso_matricula').delete().whereIn('fk_id_curso', id_curso);
            return response.status(204).send();
        }

        await connection('curso_matricula').delete().whereIn('fk_id_matricula', ids)

        return response.status(204).send();
    }

}