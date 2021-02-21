const Router = require('express').Router;
const rusletsController = require('../controllers/rusletsController')

const rusletsRouter = Router();
rusletsRouter.route('/')
    .get(async function(req, res) {
        try {
            res.send(await rusletsController.getAll());
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .post(async function(req, res) {
        try {
            const rssItem = {
                source: parseInt(req.body.source),
                title: req.body.title,
                link: req.body.link,
                date: new Date(req.body.date)
            };
            res.send(await rusletsController.post(rssItem));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    });
rusletsRouter.route('/:id')
    .get(async function(req, res) {
        try {
            const id = parseInt(req.params.id);
            res.send(await rusletsController.get(id));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .put(async function (req, res){
        try {
            const id = parseInt(req.params.id);
            const rssItem = {
                source: parseInt(req.body.source),
                title: req.body.title,
                link: req.body.link,
                date: new Date(req.body.date)
            };
            res.send(await rusletsController.put(id, rssItem));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    })
    .delete(async function (req, res){
        try {
            const id = parseInt(req.params.id);
            res.send(await rusletsController.remove(id));
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    });

module.exports = rusletsRouter;