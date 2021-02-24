const {Router} = require('express');
const autoService = require('../services/auto_service');
const router = Router();

router.get('/select', (req, res) => {
    autoService.getAutos().then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.post('/save', (req, res) => {
    autoService.saveAutos(req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.delete('/delete/:idauto', (req, res) => {
    autoService.deleteAutos(req.params.idauto).then(data => {
        res.status(data.statusCode).json(data)
    });
});

router.patch('/update', (req, res) => {
    autoService.updateAutos(req.body).then(data => {
        res.status(data.statusCode).json(data)
    });
});

module.exports = router;