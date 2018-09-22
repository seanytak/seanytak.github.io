Plotly.d3.tsv("data/choleraDeaths.tsv", function (err, rows) {

    const headerNames = Plotly.d3.keys(rows[0]);
    
    let headerValues = [];
    let cellValues = [];

    for (i = 0; i < headerNames.length; i++) {
        headerValue = [headerNames[i]];
        headerValues[i] = headerValue;
        cellValue = unpack(rows, headerNames[i]);
        cellValues[i] = cellValue;
    }

    headerValues.push(['Total Attacks']);
    headerValues.push(['Total Deaths']);

    let total_attack_arr = [];
    let total_death_arr = [];

    unpack(rows, 'Daily Attacks').reduce(function (a, b, i) {
        return total_attack_arr[i] = a + b;
    }, 0);
    unpack(rows, 'Daily Deaths').reduce(function (a, b, i) {
        return total_death_arr[i] = a + b;
    }, 0);

    let data_obj = {};
    data_obj['Total Attacks'] = accumulate_sum(unpack(rows, 'Daily Attacks'));
    data_obj['Total Deaths'] = accumulate_sum(unpack(rows, 'Daily Deaths'));

    cellValues.push(data_obj['Total Attacks']);
    cellValues.push(data_obj['Total Deaths']);

    const tableData = [{
        type: 'table',
        columnwidth: [30, 20, 20, 20, 20],
        columnorder: [0, 1, 2, 3, 4],
        header: {
            values: headerValues,
            align: "center",
            line: {
                width: 1,
                color: 'rgb(50, 50, 50)'
            },
            fill: {
                color: [tableHeaderColor]
            },
            font: {
                family: "Arial",
                size: 11,
                color: "white"
            }
        },
        cells: {
            values: cellValues,
            align: ["left", "right"],
            line: {
                color: "black",
                width: 1
            },
            fill: {
                color: [genericColumnColor, attackColor, deathColor, attackColor, deathColor]
            },
            font: {
                family: "Arial",
                size: 10,
                color: ["black"]
            }
        }
    }]

    const tableLayout = {
        title: 'Daily and Total Cholera Attacks and Deaths in 1854',
        height: 1100,
    };

    Plotly.plot('fatality_table', tableData, tableLayout);

    const attack_trace = {
        type: "scatter",
        mode: "lines",
        name: 'Daily Attacks',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'Daily Attacks'),
        line: {
            color: attackColor,
            dash: 'dot',
        }
    };

    const total_attack_trace = {
        type: "scatter",
        mode: "lines",
        name: 'Total Attacks',
        x: unpack(rows, 'Date'),
        y: data_obj['Total Attacks'],
        line: {
            color: attackColor,
        }
    };

    const death_trace = {
        type: "scatter",
        mode: "lines",
        name: 'Daily Deaths',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'Daily Deaths'),
        line: {
            color: deathColor,
            dash: 'dot',
        }
    };

    const total_death_trace = {
        type: "scatter",
        mode: "lines",
        name: 'Total Deaths',
        x: unpack(rows, 'Date'),
        y: data_obj['Total Deaths'],
        line: {
            color: deathColor,
        }
    };

    const timeSeriesData = [attack_trace, death_trace, total_attack_trace, total_death_trace];

    const timeSeriesLayout = {
        title: 'Daily and Total Cholera Attacks and Deaths in 1854',
        xaxis: {
            title: 'Day',
            tickfont: {
                size: 8
            }
        },
        yaxis: {
            title: 'Number of Attacks / Deaths'
        }
    };

    Plotly.newPlot('time_series', timeSeriesData, timeSeriesLayout);
});