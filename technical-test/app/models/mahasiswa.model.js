module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama: String,
            npm: String,
            alamat: {
                provinsi: String,
                kota: String,
                jalan: String
            },
            hobi: [ String ] 
        }
        
    );
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        
        return object;
    });
    return mongoose.model("mahasiswa",schema);
}