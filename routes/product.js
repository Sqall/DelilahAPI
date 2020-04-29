const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../server.js');

router.get('/',(req,res) => {
    const query = 'SELECT * FROM producto';
    db.query(query,{ raw:true }).then(result => {
        const [resultados] = result;
        res.status(200).json(resultados);
    }).catch(e => {
        res.status(204).json(e);
    });
});

router.get('/:id',(req,res) => {
    const query = "SELECT * FROM producto as us WHERE us.id ="+ req.params.id +";";
    db.query(query,{ raw:true, type: db.QueryTypes.SELECT}).then(response => {
        const result = response;
        res.status(200).json(result);
    }).catch(e => {
        res.status(204).json(e);
    });
});

module.exports = router;