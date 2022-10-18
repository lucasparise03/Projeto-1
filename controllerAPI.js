const Receita = require('../models/receita');

module.exports = {
    async getReceitas(req, res) {
         const receitas = await Receita.find();
         return res.json({ "data": { "status": "success", receitas } });
    },
    async getReceitaById(req, res) {
        const {id} = req.params;
        const receita = await Receita.findById(id);
        res.json({ "data": { "status": "success", receita} });
    },
    async postReceita(req, res) {

          const { nome, ingredientes, preparo} = req.body;
          const receita = new Receita({ nome, ingredientes, preparo});
          await console.log(receita)
          await receita.save().then((receita) => {
                return res.json({"data": {"status": "success", receita } });
          });
    },
    async putReceita(req, res) {
        await Receita.findOneAndUpdate({_id: {$in: req.params.id}}, req.body).then((receita) => {
            return res.json({"data": {"status": "success", receita}});
        });
    },
    async deleteReceita(req, res) {
        await Receita.findOneAndRemove({_id: {$in: req.params.id}}).then((receita) => {
              return res.json({"data": {"status": "success", receita}});
    });
}
        
}
