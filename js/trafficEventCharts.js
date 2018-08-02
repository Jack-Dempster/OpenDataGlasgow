google.charts.load('current', { 'packages': ['line'] });
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawSev1Chart);

function drawSev1Chart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/14bZJPaHbZvw1O2mni8Uql3fa1Hm_-ys78m_0dH3EkNw/edit?usp=sharing');

    //query.setQuery("select AE, count(F) where F=1 group by AE label count(F) 'Severity 1 Accidents'");
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Traffic Accidents',
            vAxis: { title: '' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            legend: { position: "bottom" },
            animation: {
                "startup": true,
                duration: 1000,
                easing: "out"
            },
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                maxZoomIn: 0.5,
                keepInBound: true
            }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('sev1Chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}