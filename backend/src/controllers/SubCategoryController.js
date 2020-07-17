const connection = require('../database/connection');
const session = require('./SessionController');

module.exports = {
    async index(request, response){
        const {id_categoria} = request.body;
        const category = await connection('subcategoria')
            .select('*')
            .join('categoria', 'categoria.id_categoria', '=', 'subcategoria.fk_id_categoria')
            .where('categoria.id_categoria', id_categoria);

        return response.json(category)

    },

    async create(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { nome_subcat, fk_id_categoria } = request.body;
        
        const id_categoria = await connection('categoria')
            .select('id_categoria')
            .where('id_categoria', fk_id_categoria);

        if(id_categoria <= 0){
            return response.status(404).json({error: 'Categoria não existe!'});
        }

        const category = await connection('subcategoria').insert({nome_subcat, fk_id_categoria});

        return response.json(category);
    },

    async update(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }
        const { id_subcat, nome_subcat} = request.body;

        await connection('subcategoria').update({nome_subcat}).where('id_subcat', id_subcat);

        return response.status(204).send();
    },

    async delete(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }
        const { id_subcat } = request.body;

        const [curso] = await connection('cursos')
            .select('*')
            .where('fk_id_subcat', id_subcat);

        if(!curso){
            await connection('subcategoria').delete().where('id_subcat', id_subcat);
        }else{
            return response.status(401).json({error: 'Não foi possivel deletar, Categoria possui Subcategorias!'});
        }

        return response.status(204).send();
    }
}