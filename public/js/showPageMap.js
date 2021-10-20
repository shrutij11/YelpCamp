// const campground = require("../../models/campground");

mapboxgl.accessToken = mapToken;
// mapboxgl.accessToken =pk.eyJ1Ijoic2hydXRpajExIiwiYSI6ImNrdXZod3l5NDA5dmMydWtmNHdkY29vZ2QifQ.JZ46bgMFrYaGWSGBuu7wdQ;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset:25 })
     .setHTML(
         `<h4>${campground.title}</h4><p>${campground.location}</p>`
     )
)
.addTo(map)