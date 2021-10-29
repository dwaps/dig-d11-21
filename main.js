import './style.css'
import './node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet'

var mymap = L.map('mapid');

//OpenStreet Map version (free)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



