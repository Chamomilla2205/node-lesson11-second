const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
require('dotenv').config();

const apiRouter = require('./router/api.router');
const db = require('./dataBase/MySQL').getInit();

db.setModels();

const app = express();

app.use(fileUpload());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'static')));

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            customCode: err.customCode || 0,
            message: err.message || ''
        });
});

app.listen(5000, () => {
    console.log('App listen 5000');
});
