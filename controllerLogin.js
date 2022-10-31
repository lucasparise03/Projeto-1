const path = require('path');

module.exports = {
    async getLogin(req, res) {
        res.render(path.join(__dirname, '..', 'views/login/login.handlebars'))
    },
}