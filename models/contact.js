/**
 * Created by Joe on 14/4/16.
 */
var mongoose = require('mongoose');
Schema   = mongoose.Schema;



var contactSchema = new Schema({

    name:       {type : String},
    email:      { type: String},
    number:     { type: String },


}, {
    versionKey: false // You should be aware of the outcome after set to false (elimina __V)
});

module.exports = mongoose.model('Contact', contactSchema);