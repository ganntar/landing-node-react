const connection = require('../database/connection');
const session = require('./SessionController');

module.exports = {
    async index(request, response){
        const {id_subcat} = request.body;
        const subcategory = await connection('cursos')
            .select('*')
            .join('subcategoria', 'subcategoria.id_subcat', '=', 'cursos.fk_id_subcat')
            .where('subcategoria.id_subcat', id_subcat);

        return response.json(subcategory)
    },

    async create(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }

        const { nome_curso, desc_curso, carga_hr_curso, vlr_curso, fk_id_subcat } = request.body;
        
        const id_subcat = await connection('subcategoria')
            .select('id_subcat')
            .where('id_subcat', fk_id_subcat);

        if(id_subcat <= 0){
            return response.status(404).json({error: 'Subcategoria não existe!'});
        }

        const course = await connection('cursos')
            .insert({nome_curso, desc_curso, carga_hr_curso, vlr_curso, fk_id_subcat});

        return response.json(course);
    },

    async update(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }
        const {id_curso, nome_curso, desc_curso, carga_hr_curso, vlr_curso, fk_id_subcat} = request.body;

        await connection('cursos').update({nome_curso, desc_curso, carga_hr_curso, vlr_curso, fk_id_subcat}).where('id_curso', id_curso);

        return response.status(204).send();
    },

    async delete(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;
        const validation = await session.Authentication(email, senha);

        if(validation === false){
            return response.status(400).json({ error: 'Usuario não Autenticado, Por favor faça o login!'});
        }
        const { id_curso } = request.body;

        const [curso_matricula] = await connection('curso_matricula')
            .select('*')
            .where('fk_id_curso', id_curso);

        if(!curso_matricula){
            await connection('cursos').delete().where('id_curso', id_curso);
        }else{
            return response.status(401).json({error: 'Não foi possivel deletar, o curso possui alunos cadastrados!'});
        }

        return response.status(204).send();
    },
}