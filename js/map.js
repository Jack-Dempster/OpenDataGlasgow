//initialise Glasgow Map
var map = L.map(document.getElementById("map2")).setView([55.857925, -4.251879], 14);

// load a tile layer
var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 12,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGVtcHNzIiwiYSI6ImNqazVuMWRsbDAxcjAza3RlZnZtaXczMWwifQ.9EurZ8FEJU_hK046wbSfAQ'
    }).addTo(map);

var satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 12,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiZGVtcHNzIiwiYSI6ImNqazVuMWRsbDAxcjAza3RlZnZtaXczMWwifQ.9EurZ8FEJU_hK046wbSfAQ'
    });
map.setZoom(14);

$.getJSON("/data/traffic.geojson", function (data) {

    var locations = data.features.map(function (rat) {
        // the heatmap plugin wants an array of each location
        var location = rat.geometry.coordinates.reverse();
        location.push(0.5);
        return location; // e.g. [50.5, 30.5, 0.2], // lat, lng, intensity
    });
    var cctv = new L.GeoJSON.AJAX("/data/cctv-locations.geojson", {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 10
            });
        }
    });

    var heat = L.heatLayer(locations, { radius: 10 });
    map.addLayer(heat);
    var baseMaps = {
        "Streets": streets,
        "Satellite": satellite
    };

    var overlayMaps = {
        "Heat": heat,
        "CCTV": cctv
    };

    L.control.layers(baseMaps, overlayMaps).addTo(map);
})




