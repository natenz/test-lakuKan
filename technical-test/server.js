const express = require ('express');
const cors = require('cors');
const db = require("./app/models");

const app = express();

const corsOptions = {
    origin: "*"
};
// register cors middleware.

app.use(cors(corsOptions));
app.use(express.json());

// koneksi database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
db.mongoose.connect(db.url, mongooseConfig)
    .then(()=> console.log("Database connected!"))
    .catch(err => {
        console.log(`gagal konek ${err}`);
        process.exit();
    });


// Memanggil route mhs
require("./app/routes/mahasiswa.routes")(app);


const PORT = process.env.PORT || 8000;
app.listen( PORT, () => console.log(`server started on port ${PORT}`));