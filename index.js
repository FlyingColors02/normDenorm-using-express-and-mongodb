let express = require("express");
let mongo = require("mongoose");
let app = express();
let port = process.env.PORT||4800;
let movie = require("./routes/movie");
let genre = require("./routes/genre");
app.use(express.json());
app.use("/api/movie",movie);
app.use("/api/genre",genre);

mongo.connect("mongodb://localhost/CoordinateMongodb&Express",{ useNewUrlParser: true , useUnifiedTopology: true})
        .then(()=>console.log("database got connected"))
        .catch(error=>console.log(`something went wrong!!`,error.message));

app.listen(port,()=>console.log(`port is working on ${port}`));