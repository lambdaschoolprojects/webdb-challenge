const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());

const projectRoutes = require('./routes/projectRoutes');

server.use('/api/projects', projectRoutes);

module.exports = server;