//initialise Glasgow Map
var map = L.map(document.getElementById("map2")).setView([55.857925, -4.251879], 14);

// load a tile layer
var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGVtcHNzIiwiYSI6ImNqazVuMWRsbDAxcjAza3RlZnZtaXczMWwifQ.9EurZ8FEJU_hK046wbSfAQ'
    }).addTo(map);
map.setZoom(11);

var northEast = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151265.geojson"),
    greaterPollock = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151266.geojson"),
    newlands = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151267.geojson"),
    pollokshields = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151268.geojson"),
    linn = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151269.geojson"),
    langside = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151270.geojson"),
    southside = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151271.geojson"),
    shettleston = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151272.geojson"),
    cardonald = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151273.geojson"),
    govan = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151274.geojson"),
    garscadden = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151275.geojson"),
    victoria = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151276.geojson"),
    maryhill = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151277.geojson"),
    drumpchapel = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151278.geojson"),
    calton = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151279.geojson"),
    baillieston = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151280.geojson"),
    east = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151281.geojson"),
    canal = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151282.geojson"),
    springburn = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151283.geojson"),
    anderston = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151284.geojson"),
    partick = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151285.geojson"),
    hillhead = new L.GeoJSON.AJAX("https://mapit.mysociety.org/area/151286.geojson");

var wards = L.layerGroup([northEast, greaterPollock, newlands, pollokshields, linn, langside, southside, shettleston, cardonald, govan, garscadden, victoria, maryhill, drumpchapel, calton, baillieston, east, canal, springburn, anderston, partick, hillhead]).addTo(map);

var baseMaps = {
    "Streets" : streets
};
var overLayMaps = {
    "Wards" : wards
};

L.control.layers(baseMaps, overLayMaps).addTo(map);
