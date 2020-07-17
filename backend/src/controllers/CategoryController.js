const connection = require('../database/connection');
const session = require('./SessionController');


module.exports = {
    async index(request, response){

        const category = await connection('categoria').select('*');

        return response.json(category)


    },

    async create(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { nome_categoria } = request.body;
 
        const category = await connection('categoria').insert({nome_categoria});

        return response.json(category);

    },

    async update(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { id_categoria, nome_categoria } = request.body;

        await connection('categoria').update('nome_categoria', nome_categoria).where('id_categoria', id_categoria);

        return response.status(204).send();


    },

    async delete(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { id_categoria } = request.body;

        const [sub_categoria] = await connection('subcategoria')
                                .select('*')
                                .where('fk_id_categoria', id_categoria);

        if(!sub_categoria){
            await connection('categoria').delete().where('id_categoria', id_categoria);
        }else{
            return response.status(401).json({error: 'Não foi possivel deletar, Categoria possui Subcategorias!'});
        }

        return response.status(204).send();

    }

}