let mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const dbase = process.env.DB_URL;
mongoose.connection.on('connected', () => console.log(`*** mongoose connected on ${dbase} ***`));
mongoose.connection.on('error', (err) => console.log('*** mongoose connection error ***', err));



mongoose.connect(dbase, {useNewUrlParser: true});
