const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


// crear una app express
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// habilitar pug
app.set('view engine', 'pug');

// añadir la carpeta de las vistas
app.set('views', path.join(_dirname, './views'));

// habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

app.listen(3000);