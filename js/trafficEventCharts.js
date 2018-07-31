google.charts.load('current', { 'packages': ['line'] });
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawSev1Chart);
google.charts.setOnLoadCallback(drawSev2Chart);
google.charts.setOnLoadCallback(drawSev3Chart);

function drawSev1Chart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1QYUUwh_3Yawy-x5V3y_vMOXq1wn9BIOQBDnrBqOLgpI/edit?usp=sharing');

    query.setQuery("select AE, count(F) where F=1 group by AE label count(F) 'Severity 1 Accidents'");
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

function drawSev2Chart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1QYUUwh_3Yawy-x5V3y_vMOXq1wn9BIOQBDnrBqOLgpI/edit?usp=sharing');

    query.setQuery("select AE, count(F) where F=2 group by AE label count(F) 'Severity 2 Accidents'");
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
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                maxZoomIn: 0.5,
                keepInBound: true
            }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('sev2Chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}

function drawSev3Chart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1QYUUwh_3Yawy-x5V3y_vMOXq1wn9BIOQBDnrBqOLgpI/edit?usp=sharing');

    query.setQuery("select AE, count(F) where F=3 group by AE label count(F) 'Severity 3 Accidents'");
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
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                maxZoomIn: 0.5,
                keepInBound: true
            }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('sev3Chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}