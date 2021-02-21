const Router = require('express').Router;
const enterController = require('../controllers/enterController')
const enterRouter = Router();
enterRouter.route('/')
    .get(async function(req, res) {
        try {
            res.send(await enterController.getAll());
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
            res.send(await enterController.post(text));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    });
enterRouter.route('/:id')
    .get(async function(req, res) {
        try {
            const id = parseInt(req.params.id);
            res.send(await enterController.get(id));
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
            res.send(await enterController.put(id, text));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .delete(async function (req, res){
        try {
            const id = parseInt(req.params.id);
            res.send(await enterController.remove(id));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    });

module.exports = enterRouter;