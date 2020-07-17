const connection = require('../database/connection');
const session = require('./SessionController');
const { where } = require('../database/connection');

module.exports = {

    async index(request, response){

        const page = await connection('paginas')
                            .select('*')
                            .where('ativo', 'S')
                            .first();
        
        return response.json(page);

    },

    async list(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const pages = await connection('paginas')
                            .select('*')

        return response.json(pages);

    },

    async create(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const [totalPages] = await connection('paginas').count();

        if(totalPages['count(*)'] >= 10){
            return response.status(401).json({error: 'Já excedeu o limite de 10 páginas cadastradas!'});
        }

        const { carrossel_1,
                carrossel_2,
                carrossel_3,
                carrossel_4,
                icone_menu,
                texto_menu,
                cor_menu,
                contato_1,
                contato_2,
                contato_3,
                tema_pagina,
                ativo} = request.body;
        
        

        const [id] = await connection('paginas').insert({
            carrossel_1,
            carrossel_2,
            carrossel_3,
            carrossel_4,
            icone_menu,
            texto_menu,
            cor_menu,
            contato_1,
            contato_2,
            contato_3,
            tema_pagina,
            ativo
        });

        return response.json({id});
    },

    async update(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const { id_pagina,
            carrossel_1,
            carrossel_2,
            carrossel_3,
            carrossel_4,
            icone_menu,
            texto_menu,
            cor_menu,
            contato_1,
            contato_2,
            contato_3,
            tema_pagina,
            ativo} = request.body;
        
        if(ativo == "S"){
            await connection('paginas').whereNotIn('id_pagina',[id_pagina]).update('ativo', 'N');
        }
        
        await connection('paginas')
                .update({
                        carrossel_1: carrossel_1,
                        carrossel_2: carrossel_2,
                        carrossel_3: carrossel_3,
                        carrossel_4: carrossel_4,
                        icone_menu: icone_menu,
                        texto_menu: texto_menu,
                        cor_menu: cor_menu,
                        contato_1: contato_1,
                        contato_2: contato_2,
                        contato_3: contato_3,
                        tema_pagina: tema_pagina,
                        ativo: ativo
                })
                .where('id_pagina', id_pagina);
        
        return response.status(204).send()

    },

    async delete(request, response){
        const email = request.headers.emailauthorization;
        const senha = request.headers.senhaauthorization;

        const validation = await session.Authentication(email, senha);
        
        if(validation === false){
            return response.status(401).json({error: 'Usuario não Autenticado!'});
        }

        const { id } = request.params;

        const [pages] = await connection('paginas').count();

        if(pages['count(*)'] <= 1){
            return response.status(401).json({error: 'Não é possivel excluir todos os temas!'});
        }

        await connection('paginas').where('id_pagina', id).delete();

        return response.status(204).send();


    }


}
