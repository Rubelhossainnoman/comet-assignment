/**
 * Get express ...here..
 */
const express = require('express');
const path = require('path');
const color = require('colors');
const env = require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');
const router = require('./routers/pageRouter');
const uc = require('upper-case');

/**
 * Get port
 */
const port = process.env.SERVER_PORT || 4000;

/**
 * Express init...
 */
const app = express();

/**
 * Data management for from...
 */
app.use(express.json());
app.use(express.urlencoded({extended : false}));

/**
 * Using foulder..
 */
app.use(express.static('public'));

/**
 * Set EJS Engine...
 */
app.set('view engine','ejs');
app.use(expressLayouts);
app.set('layout','layouts/app')

/**
 * Routing management...here...
 */
app.use('/', router);


/**
 * Create Server here...
 */
app.listen(port, () =>{
    console.log(uc.upperCase(`This server is running on port ${port}`).bgGreen.white);
})