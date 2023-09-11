const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { LocationModel } = require("./model/Location.model")

require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 7001          

app.use(express.json())  
app.use(cors());    


app.get("/", (req, res) => {
    res.send("location page")
})

app.post('/locations', async (req, res) => {
    const {
        locationname, 
        address, 
        lat, 
        lng   
    } = req.body;
    const locations = new LocationModel({
        locationname,
        address,
        lat,
        lng
    })
    try {   
        await locations.save()
        res.status(200).send({ msg: 'locations data successfully', locations })
        
    } catch(err) {
        res.status(404).send({ msg: "something went wrong", err })
    }
});

app.get('/locations', async (req, res) => {
    try {
      const locations = await LocationModel.find();
      res.status(201).send({ msg: 'get location data successfully', locations });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: 'Server Error' });
    }
});

app.listen(PORT, async ()=> {    
    try {
        await connection
        console.log("connected to DB")
    } catch (err) {
        console.log("not connected to db")    
        console.log(err)
    }
    console.log(`listning on PORT ${PORT}`)
})
