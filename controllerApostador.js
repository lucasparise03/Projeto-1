const path = require('path');

module.exports = {
    async getPreAposta(req, res) {
        res.render(path.join(__dirname, '..', 'views/apostador/apostador.handlebars'))
    },

    async getMinhasApostas(req, res) {
        res.render(path.join(__dirname, '..', 'views/apostador/minhasApostas.handlebars'))
    },

    async getEditarAposta(req, res) {
        res.render(path.join(__dirname, '..', 'views/apostador/editarAposta.handlebars'))
    },
    
}