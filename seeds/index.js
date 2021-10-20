const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } =require('./seedHelpers');
const Campground = require('../models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
    /*useCreateIndex:true,*/
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",()=> {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random()*array.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i=0; i<100; i++){

        const random1000=Math.floor(Math.random()*1000);
        const price=Math.floor(Math.random()*20)+10;
        const camp=new Campground({
            author: '61685b60edf75f5227b55653', 
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:'   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam pariatur excepturi consequatur eos voluptatibus eligendi tempora dolores dolorem deleniti aliquam delectus autem, reiciendis, consequuntur quae! Autem commodi sapiente quas?',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                    {
                        url: 'https://res.cloudinary.com/shrutij11/image/upload/v1634658434/YelpCamp/t4if5egda8icv2vdsot7.jpg',
                        filename: 'YelpCamp/t4if5egda8icv2vdsot7',
                      
                    },
                    {
                        url: 'https://res.cloudinary.com/shrutij11/image/upload/v1634658434/YelpCamp/ciof7maqzemepjjxw9kj.jpg',
                        filename: 'YelpCamp/ciof7maqzemepjjxw9kj',
                    }   
                  
            ]
        })
        await camp.save();
    }
}
seedDB().then(() =>{
    mongoose.connection.close();
})
