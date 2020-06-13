let mongoose = require("mongoose");

let GenreSchema = new mongoose.Schema({
    name:{type:String,required:true}
});

let GenreModel = mongoose.model("Genres",GenreSchema);

module.exports = {GenreSchema,GenreModel};