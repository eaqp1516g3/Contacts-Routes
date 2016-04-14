/**
 * Created by Joe on 14/4/16.
 */
module.exports = function (app) {
    var mongoose = require('mongoose');
    var Contact = require('../models/contact.js');

    //GET - GET All Users By Into DB
    allContacts = function (req, res) {
        Contact.find(function (err, contacts) {
            if (err) res.send(500, err.message);

            console.log('GET /contacts')
            res.status(200).json(contacts);
        });
    };

    //GET - GET a contacts with his id
    getContact = function(req,res) {
        Contact.findById(req.params.id,function(err,contact){
            if (err) return res.send(500, err.message);

            console.log('GET /contact/' + req.params.id);
            res.status(200).json(contact);
        })
    }

    //POST - POST a new Contact
    addContact = function(req,res) {
        var contact = new Contact({
            name : req.body.name,
            email: req.body.email,
            number: req.body.number,
        });

        contact.save(function (err, contact) {
            if (err) return res.send(500, err.message);
            res.status(200).json(contact);

        });
    };

    //PUT - UPDATE contact's parameters
    updateContact = function(req,res){
        Contact.findById(req.params.id, function (err, contact) {
            console.log('PUT');
            console.log(req.params.id);
            console.log(req.body);


            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.number = req.body.number;


            contact.save(function (err) {
                if (err) return res.send(500, err.message);
                res.status(200).json(contact);
            });
        });
    };

    //DELETE - Delete a Contact with specified ID
    deleteContact = function (req, res) {
            Contact.findById(req.params.id, function (err, contact) {
            console.log('DELETE contact');
            return contact.remove(function (err) {
                if (!err) {
                    console.log("contacto eliminado");
                    return res.send('');
                } else {
                    console.log(err);
                }
            });
        });
    }


    //endpoints
    app.get('/contacts/',allContacts);
    app.get('/contacts/:id',getContact);
    app.put('/contacts/:id',updateContact);
    app.post('/contacts/',addContact);
    app.delete('/contacts/:id',deleteContact);
}