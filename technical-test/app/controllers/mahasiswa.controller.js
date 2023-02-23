const db = require("../models")
const Mahasiswa = db.mahasiswa

exports.create = ( req, res ) => {

    Mahasiswa.create(req.body)
        .then(() => res.send({message: "Data berhasil disimpan!"}))
        .catch(err => {
            res.status(500).send({message: err.message});
        })
}

exports.findAll = ( req, res ) => {
    Mahasiswa.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.show = ( req, res ) => {
    const id = req.params.id;
    Mahasiswa.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.update = ( req, res ) => {
    
}

exports.delete = ( req, res ) => {
    
}