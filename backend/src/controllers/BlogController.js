const connection = require('../database/connection');
const session = require('./SessionController');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('blog').count();

        const blogs = await connection('blog')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Pages', count['count(*)'])

        return response.json(blogs)
    },

    async create(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const {titulo_blog, img_blog, descricao_blog} = request.body;

        const [id] = await connection('blog').insert({titulo_blog, img_blog, descricao_blog});

        return response.status(204).json({id})


    },

    async update(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const {id_blog, titulo_blog, img_blog, descricao_blog} = request.body;

        await connection('blog').update({
            titulo_blog: titulo_blog,
            img_blog: img_blog,
            descricao_blog: descricao_blog
        }).where('id_blog', id_blog);
        
        return response.status(204).send();

    },

    async delete(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const { id } = request.params;

        await connection('blog').delete().where('id_blog', id);

        return response.status(204).send();

    }

}
