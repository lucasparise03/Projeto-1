const path = require('path');

module.exports = {
    async getApostas(req, res) {
        res.render(path.join(__dirname, '..', 'views/administrador/administrador.handlebars'))
    },

    async deletarAposta(req, res) {
        res.render(path.join(__dirname, '..', 'views/administrador/deletar/administrador.handlebars'))
    },

    async getJogadores(req, res) {
        res.render(path.join(__dirname, '..', 'views/administrador/jogadores/jogadores.handlebars'))
    },

    async editarJogador(req, res) {
        res.render(path.join(__dirname, '..', 'views/administrador/jogadores/editarJogadores.handlebars'))
    },

    async verComprovante(req, res) {
        res.render(path.join(__dirname, '..', 'views/administrador/comprovante/verComprovante.handlebars'))
    },
    

}