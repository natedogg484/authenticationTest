//mongo connection configuration
const mongoose = require('mongoose');

const MONGO_USERNAME = 'nate';
const MONGO_PASSWORD = 'Ausfahrt1!';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'authTest';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});

const url = 'mongodb://nate:Ausfahrt1!@127.0.0.1:27017/flaskTest?authSource=admin'