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
                layer.bindPopup("Date: " + feature.properties.Date + "</strong><br/>" + "Accident Severity: " + feature.properties.Accident_Severity);
            }
        }
    });
    // Add geoJsonLayer to markercluster group
    markers.addLayer(geoJsonLayer);
    // Add the markercluster group to the map
    map2.addLayer(markers);
});

var sev1 = L.markerClusterGroup();
// Use jQuery to load date from GeoJSON file
$.getJSON('data/traffic.geojson', function (data) {
    var geoJsonLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Accident_Severity == 1) {
                layer.bindPopup("Date: " + feature.properties.Date + "</strong><br/>" + "Accident Severity: " + feature.properties.Accident_Severity);
            }
        }
    });
    // Add geoJsonLayer to markercluster group
    sev1.addLayer(geoJsonLayer);
});

var sev2 = L.markerClusterGroup();
// Use jQuery to load date from GeoJSON file
$.getJSON('data/traffic.geojson', function (data) {
    var geoJsonLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Accident_Severity == 2) {
                layer.bindPopup("Date: " + feature.properties.Date + "</strong><br/>" + "Accident Severity: " + feature.properties.Accident_Severity);
            }
        }
    });
    // Add geoJsonLayer to markercluster group
    sev2.addLayer(geoJsonLayer);
});

var sev3 = L.markerClusterGroup();
// Use jQuery to load date from GeoJSON file
$.getJSON('data/traffic.geojson', function (data) {
    var geoJsonLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.Accident_Severity == 3) {
                layer.bindPopup("Date: " + feature.properties.Date + "</strong><br/>" + "Accident Severity: " + feature.properties.Accident_Severity);
            }
        }
    });
    // Add geoJsonLayer to markercluster group
    sev3.addLayer(geoJsonLayer);
});

var baseMaps = {
    "Streets": streets
};
var overLayMaps = {
    "Grouped": markers,
    "Severity 1": sev1,
    "Severity 2": sev2,
    "Severity 3": sev3
};

L.control.layers(baseMaps, overLayMaps).addTo(map2);

/*//Add Heat layer to the map
var heatLayer = L.heatLayer();
$.getJSON("/data/traffic.geojson", function (geojson) {
    var locations = geojson.features.map(function (data) {
        // the heatmap plugin wants an array of each location
        var location = data.geometry.coordinates.reverse();
        location.push(0.5);
        return location; // e.g. [50.5, 30.5, 0.2], // lat, lng, intensity
    });

    var heat = L.heatLayer(locations, { radius: 10 });
 
});*/