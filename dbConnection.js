const mongoose = require('mongoose')
function connectToDB(dbURL) {
    return mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((e) => {
        console.log('MongoDB Connected')
    })
}
module.exports = connectToDB