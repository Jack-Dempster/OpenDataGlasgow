google.charts.load('current', { 'packages': ['line'] });
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawSmokeChart);
google.charts.setOnLoadCallback(drawSmokeDeathChart);
google.charts.setOnLoadCallback(drawLifeChart);
google.charts.setOnLoadCallback(drawBeingChart);
google.charts.setOnLoadCallback(drawBikeChart);
google.charts.setOnLoadCallback(drawCoronChart);
google.charts.setOnLoadCallback(drawCancerChart);
google.charts.setOnLoadCallback(drawCerebChart);

// Get the modal
var modal = document.getElementById('');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.visibility = "hidden";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style. visibility = "hidden";
    }
}

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
            title: 'Smoking Quit Rates',
            vAxis: { title: 'Quitters per 100,000' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 },
            series: 
            {
                0: {lineDashStyle: [4, 4]},
            }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('smokeChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('smokeQuitModal');
            modal.style.visibility = "visible";
        })
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
            }
            //chartArea:{width:'80%', height:'80%' } 
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('smokeDeath'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('smokeDeathModal');
            modal.style.visibility = "visible";
        })
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
            }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('lifeExpctChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('lifeExpModal');
            modal.style.visibility = "visible";
        })
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
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('bikeChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('bikeModal');
            modal.style.visibility = "visible";
        })
    }
}

function drawCoronChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/10ax6KeegFRMbyHCy2PjFzg9GlmF28Gq-ul45FP9er8E/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Early Deaths from Coronary Heart Disease',
            vAxis: { title: 'Standarised Rate' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('coronChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('coronModal');
            modal.style.visibility = "visible";
        })
    }
}

function drawCancerChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1j2wypCbEIBJ2SX63u5OXCorUMSWS51-qZAqUCQ59Ufc/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Early Deaths from Cancer',
            vAxis: { title: 'Standarised Rate' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('cancerChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('cancerModal');
            modal.style.visibility = "visible";
        })
    }
}

function drawCerebChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1Z0E3-K3GUCaqvOoUYXjUNKfhJ950YtlMNOmxRKtLUeY/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'Early Deaths from Cerebrovascular Disease',
            vAxis: { title: 'Standarised Rate' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.LineChart(document.getElementById('cerebChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('cerebModal');
            modal.style.visibility = "visible";
        })
    }
}

function drawBeingChart() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1NAbz0hhc0GhATSg3vVB3ru2yFw2TNDICH185HS43jaw/edit?usp=sharing');
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            title: 'General Health of Glasgow Residents',
            vAxis: { title: '' },
            hAxis: { title: '', slantedText: true, slantedTextAngle: 45 }
        };

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('beingChart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
        google.visualization.events.addListener(chart, 'click', function(){
            modal=document.getElementById('beingModal');
            modal.style.visibility = "visible";
        })
    }
}


