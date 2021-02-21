const Router = require('express').Router;
const fonletsController = require('../controllers/fonletsController')

const fonletsRouter = Router();
fonletsRouter.route('/')
    .get(async function(req, res) {
        try {
            res.send(await fonletsController.getAll());
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .post(async function(req, res) {
        try {
            const text = {
                ent_text: req.body.ent_text
            };
            res.send(await fonletsController.post(text));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    });
fonletsRouter.route('/:id')
    .get(async function(req, res) {
        try {
            const id = parseInt(req.params.id);
            res.send(await fonletsController.get(id));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .put(async function (req, res){
        try {
            const id = parseInt(req.params.id);
            const text = {
                ent_text: req.body.ent_text
            };
            res.send(await fonletsController.put(id, text));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .delete(async function (req, res){
        try {
            const id = parseInt(req.params.id);
            res.send(await fonletsController.remove(id));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    });

module.exports = fonletsRouter;