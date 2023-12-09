const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./router/user_router');

const app = express();

app.use(body_parser.json());

app.use('/',userRouter);

module.exports = app;