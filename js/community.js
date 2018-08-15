google.charts.load('current', { 'packages': ['line'] });
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawPopChart);
google.charts.setOnLoadCallback(drawTravelChart);
google.charts.setOnLoadCallback(drawHouseChart);
google.charts.setOnLoadCallback(drawSunshineChart);

function drawPopChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1Zbzi683tQHAJpB4wmfWIgKtaaQbm3ZrAtVYHkAqpBiQ/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Glasgow Population Estimate',
            vAxis: { title: 'Number' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            legend: { position: 'in' }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('popChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}

function drawTravelChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1bKLlnjKMZn3qYmeeSJnvKGpz9d_P2pt1KdV72jJWJAI/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Method of Travel to Work',
            vAxis: { title: 'Number' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('travelChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}

function drawHouseChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1-Fvxs7P44tft3SzylY6-wfumtKH2CUrNHUbibA_RH5E/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'House Composition',
            vAxis: { title: 'Number of thousands' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('houseChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}

function drawSunshineChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1sgCImT10bC6RT87g0EO9Yckt3Eaqv0oOSpgGFBpZVjg/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Sunshine Hours',
            vAxis: { title: '' },
            hAxis: { title: ''}
        };

        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('sunshineChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
}