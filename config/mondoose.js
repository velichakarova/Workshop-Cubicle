const mongoose = require('mongoose');
const config = require('./config')

module.exports = (app)=>{

    mongoose.connect(config.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
        console.log(`You're connected on database!`)
        });
}