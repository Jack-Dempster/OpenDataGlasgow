//initialise Glasgow Map

var map2 = L.map(document.getElementById("map2")).setView([55.857925, -4.251879], 14);
// load a tile layer

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        minZoom: 8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGVtcHNzIiwiYSI6ImNqazVuMWRsbDAxcjAza3RlZnZtaXczMWwifQ.9EurZ8FEJU_hK046wbSfAQ'
    }).addTo(map2);
map2.setZoom(14);

var markers = L.markerClusterGroup();
// Use jQuery to load date from GeoJSON file
$.getJSON('data/traffic.geojson', function (data) {
    var geoJsonLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Accident_Severity) {
                layer.bindPopup("Date: " + feature.properties.Date + "</strong><br/>" + "Accident Severity: " + feature.properties.Accident_Severity + "</strong><br/>"+ "Casualties:" + feature.properties.Number_of_Casualties);
            }
        }
    });
    // Add geoJsonLayer to markercluster group
    markers.addLayer(geoJsonLayer);
    // Add the markercluster group to the map
    map2.addLayer(markers);
});
//Add Heat layer to the map
$.getJSON("/data/traffic.geojson", function (geojson) {
    var locations = geojson.features.map(function (data) {
        // the heatmap plugin wants an array of each location
        var location = data.geometry.coordinates.reverse();
        location.push(0.5);
        return location; // e.g. [50.5, 30.5, 0.2], // lat, lng, intensity
    });

     var heat = L.heatLayer(locations, { radius: 12 });

     var baseMaps = {
        "Marker Cluster": markers,
        "Heat Map": heat
    };
    var overLayMaps = {
    };
    
    L.control.layers(baseMaps, overLayMaps).addTo(map2);
})



