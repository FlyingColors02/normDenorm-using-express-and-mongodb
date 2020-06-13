let express = require("express");
let router = express.Router();
let M = require("../database/movie");
let G = require("../database/genre");
let joi=require("@hapi/joi");

router.post("/createmovie",async(req,res)=>{
    let {error} = MovieValidation(req.body);
    if(error){return res.status(400).send({message:error.details[0].message})}

    let genre= await G.GenreModel.findById(req.body.genreId);
    if(!genre){return res.status(403).send({message:"Invalid Genre Id"})}

    let movie = new M({
        name:req.body.name,
        genre:{
            name:genre.name
        },
        stocks:req.body.stocks,
        actor:req.body.actor,
        price:req.body.price
    })
    let data = await movie.save();
    res.send({item:data});
});

function MovieValidation(error){
    let Schema= joi.object({
        name:joi.string().required(),
        genreId:joi.string().required(),
        stocks:joi.string().required(),
        actor:joi.string().required(),
        price:joi.string().required()
    });
    return Schema.validate(error);
}
module.exports=router;