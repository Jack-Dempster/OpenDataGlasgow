//initialise Glasgow Map

var map2 = L.map(document.getElementById("map2")).setView([55.857925, -4.251879], 14);
// load a tile layer

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGVtcHNzIiwiYSI6ImNqazVuMWRsbDAxcjAza3RlZnZtaXczMWwifQ.9EurZ8FEJU_hK046wbSfAQ'
    }).addTo(map2);
map2.setZoom(14);



//Add Heat layer to the map
$.getJSON("/data/traffic.geojson", function (geojson) {
    var locations = geojson.features.map(function (data) {
        // the heatmap plugin wants an array of each location
        var location = data.geometry.coordinates.reverse();
        location.push(0.5);
        return location; // e.g. [50.5, 30.5, 0.2], // lat, lng, intensity
    });

    var heat = L.heatLayer(locations, { radius: 10 });
    map2.addLayer(heat);
});

