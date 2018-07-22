'use strict';

var L = require('leaflet');

<<<<<<< HEAD
var streets = L.tileLayer('http://renderd.internal.kkts.com.au/osm_tiles/{z}/{x}/{y}.png', {}),
=======
var streets = L.tileLayer('http://maps.localnet:8000/osm_tiles/{z}/{x}/{y}.png', {}),
>>>>>>> 8d8ce12f404f2f192c6b6d583b4df31965d58636
  small_components = L.tileLayer('https://tools.geofabrik.de/osmi/tiles/routing_i/{z}/{x}/{y}.png', {});

module.exports = {
  defaultState: {
    center: L.latLng(-33.846467,151.116428),
    zoom: 12,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: streets
  },
  services: [{
    label: 'Car (fastest)',
<<<<<<< HEAD
    path: 'http://192.168.1.55:5000/route/v1'
=======
    path: 'http://maps.localnet:8000/osrm-backend/route/v1'
>>>>>>> 8d8ce12f404f2f192c6b6d583b4df31965d58636
  }],
  layer: [{
    'Mapbox Streets': streets
  }],
  overlay: {
    'Small Components': small_components
  },
  baselayer: {
    one: streets
  }
};

