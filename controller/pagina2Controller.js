const express = require('express');
const router = express.Router();

const api = require(`../services/api`);

const dateFormatter = require(`../public/scripts/formatters/dateFormatter`);

router.get(`/`, (req, res) => {
    
        res.render(`main.ejs`, {
            title: "Página Principal Medlynx"
        });

    });


module.exports = router;