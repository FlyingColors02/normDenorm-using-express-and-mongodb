let mongoose = require("mongoose");
let Genre = require("./genre.js");

let MovieSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    genre:{type:Genre.GenreSchema, required:true},
    stocks:{type:Number},
    actor:{type:String,required:true},
    price:{type:Number,required:true}
});

let MovieModel = mongoose.model("movies",MovieSchema);

module.exports=MovieModel;