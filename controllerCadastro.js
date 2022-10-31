const path = require('path');

module.exports = {
    async getCadastro(req, res) {
        res.render(path.join(__dirname, '..', 'views/cadastro/cadastro.handlebars'))
    },
}