let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");
let model = require("../database/genre");


router.post("/createGenre", async (req,res)=>{
    let {error} = GenreValidation(req.body);
    if(error){return res.status(400).send({message:error.details[0].message})};
    let data = new model.GenreModel({
       name:req.body.name
    });
    console.log(data);
    let result = await data.save();
    res.send({item:result});
});


function GenreValidation(e){
    let Schema = joi.object({
        name:joi.string()
    });
    return Schema.validate(e);
};


module.exports = router;