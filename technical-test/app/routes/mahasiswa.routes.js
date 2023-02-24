module.exports = app => {
    const mahasiswa = require("../controllers/mahasiswa.controller")
    const r = require("express").Router();

    r.get("/", mahasiswa.findAll);
    r.get("/:npm", mahasiswa.show);
    r.post("/add", mahasiswa.create);
    r.put("/:npm", mahasiswa.update);
    r.delete("/:npm", mahasiswa.delete);
    
    app.use("/mahasiswa", r);
    // GET Localhost:8000/mahasiswa
    
}