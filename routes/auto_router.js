const {Router} = require('express');
const autoService = require('../services/auto_service');
const router = Router();

router.get('/autos', (req, res) => {
    autoService.getAutos().then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.post('/autos', (req, res) => {
    autoService.saveAutos(req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.delete('/autos/:idauto', (req, res) => {
    autoService.deleteAutos(req.params.idauto).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.patch('/autos', (req, res) => {
    autoService.updateAutos(req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

module.exports = router;