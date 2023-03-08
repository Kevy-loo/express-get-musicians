const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
const musicRouter = require('./router/music');



const port = 3000;
app.use(express.json())
app.use("/musicians", musicRouter)
//TODO



app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})

