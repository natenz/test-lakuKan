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
    //const id = req.params.id;
    const npm = req.params.npm;
    //const data = Mahasiswa.find({npm: npm})
    Mahasiswa.findOne({npm: npm})
    //Mahasiswa.findById(id)
   
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
    
}

exports.update = ( req, res ) => {
    //const id = req.params.id;
    const npm = req.params.npm;
    // find by npm and update
    Mahasiswa.findOneAndUpdate({npm}, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({message: "Data tidak ditemukan!"})
            } 
             res.send({message: "Data berhasil diubah!"})
            
        })
        .catch(err => res.status(500).send({message: err.message}))
    
}

exports.delete = ( req, res ) => {
    //const id = req.params.id;
    const npm = req.params.npm;
    Mahasiswa.findOneAndRemove({npm})
        .then(data => {
            if(!data) {
                res.status(404).send({message: "Data tidak ditemukan!"})
            } 
            res.send({message: "Data berhasil dihapus!"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}