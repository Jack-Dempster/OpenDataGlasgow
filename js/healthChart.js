google.charts.load('current', { 'packages': ['line'] });
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawSmokeChart);
google.charts.setOnLoadCallback(drawSmokeDeathChart);
google.charts.setOnLoadCallback(drawLifeChart);
google.charts.setOnLoadCallback(drawBikeChart);

//Draw Smoking Quitter chart
function drawSmokeChart() {
    //var queryString = encodeURIComponent('SELECT A, B, C');

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1RyQRNvvBkOfavFAVKFkfGjAxpJcTLttdKm270winifs/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Smoking Quitters London',
            vAxis: { title: 'Quitters per 100,000' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            series: 
            {
                0: {lineDashStyle: [4, 4]},
            },
            explorer: {
                    actions: ['dragToZoom', 'rightClickToReset'],
                    maxZoomIn: 0.5,
                    keepInBound: true
            }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('smokeChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}
function drawSmokeDeathChart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1L_28EaaLwXQDk_oUZG91t2D4w4iqc8RuRCPqc3BFMa8/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Smoking Deaths',
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            series: 
            {
                0: {lineDashStyle: [4, 4]},
            },
            explorer: {
                    actions: ['dragToZoom', 'rightClickToReset'],
                    maxZoomIn: 0.5,
                    keepInBound: true
            }
            //chartArea:{width:'80%', height:'80%' } 
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('smokeDeath'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}

function drawLifeChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1bXTxUSsn7WRspT15uNElIDs-lIPALGSkAePBwxvew3Y/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Life Expectancy at Birth',
            vAxis: { title: '' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            series: 
            {
                0: {lineDashStyle: [4, 4]},
                3: {lineDashStyle: [4,4]}
            },
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                maxZoomIn: 0.5,
                keepInBound: true
        }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('lifeExpctChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}

function drawBikeChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1iomH3vinKLPz44Zl-ILWdOQMPG-Sfn86siRcR4p45IQ/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Bicycle Hire',
            vAxis: { title: '' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                maxZoomIn: 0.5,
                keepInBound: true
        }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('bikeChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}


