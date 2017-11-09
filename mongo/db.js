var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);


link_to_db='mongodb://aayvazy:mypass@cluster0-shard-00-00-yicxy.mongodb.net:27017,cluster0-shard-00-01-yicxy.mongodb.net:27017,cluster0-shard-00-02-yicxy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

// var mydb = MongoClient.connect(link_to_db, function (err, db) {
//   if (err) throw err

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })


module.exports = link_to_db;