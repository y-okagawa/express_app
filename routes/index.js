import React from 'react'
import ReactDOMServer from 'react-dom/server'
import SalaryInputTable from '../src/components/SalaryInputTable'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '給与入力', SalaryInputTable: ReactDOMServer.renderToString(<SalaryInputTable />) });
});

module.exports = router;
