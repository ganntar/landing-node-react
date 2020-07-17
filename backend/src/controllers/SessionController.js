const connection = require('../database/connection');

module.exports = {
    async Authentication(emailp, senhap){
        const email = emailp;
        const senha = senhap;

        const usuario = await connection('usuarios')
            .select()
            .where({email_usuario: email,
                    senha_usuario: senha })
            .first();

        if(!usuario){
            return false
        }
            return true;
        
    },

    async Subscription(emailp, senhap){
        const email = emailp;
        const senha = senhap;

        const usuario = await connection('inscricoes')
            .select()
            .where({email: email,
                    senha: senha })
            .first();

        if(!usuario){
            return false
        }
            return true;
        
    }
}