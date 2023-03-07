const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;
app.use(express.json())

//TODO
app.post('/musicians', async(req, res) => {
    const newMusician = Musician.build({
        name: req.body.name,
        instrument: req.body.instrument
    })

    await newMusician.save();
})
app.delete('/musicians/:id', async(req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    await restaurant.destroy()
})

app.put('/musicians/:id', async(req, res) => {
    const data = await Musician.findByPk(req.params.id)

    await data.update(req.body)

})

app.get("/musicians" , async (req, res) => {
    const data = await Musician.findAll();
    return res.json(data) 
})

app.get("/musicians/:id", async (req, res) => {
    const id = req.params.id
    const data = await Musician.findByPk(id);
    res.json(data)
})


app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})

