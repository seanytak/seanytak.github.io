Plotly.d3.tsv("/data/naplesCholeraAgeSexData.tsv", function (err, rows) {

    const headerNames = Plotly.d3.keys(rows[0]);

    const maleColor = 'rgba(50, 100, 230, 0.45)'
    const femaleColor = 'rgba(235, 200, 25, 0.45)'

    let headerValues = [];
    let cellValues = [];

    for (i = 0; i < headerNames.length; i++) {
        headerValue = [headerNames[i]];
        headerValues[i] = headerValue;
        cellValue = unpack(rows, headerNames[i]);
        cellValues[i] = cellValue;
    }

    const tableData = [{
        type: 'table',
        columnwidth: [20, 10, 10],
        columnorder: [0, 1, 2],
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
            align: ["right"],
            line: {
                color: "black",
                width: 1
            },
            fill: {
                color: [genericColumnColor, maleColor, femaleColor]
            },
            font: {
                family: "Arial",
                size: 10,
                color: ["black"]
            }
        }
    }];

    const tableLayout = {
        title: "Cholera Fatalities in the Naples Area"
    };

    Plotly.plot('gender_fatality_table', tableData, tableLayout);

    const maleFatalitiesTrace = {
        x: unpack(rows, 'Age'),
        y: unpack(rows, 'Male'),
        text: unpack(rows, 'Male'),
        textposition: 'auto',
        hoverinfo: 'none',
        name: 'Male',
        marker: {
            color: maleColor,
        },
        type: 'bar'
    };

    const femaleFatalitiesTrace = {
        x: unpack(rows, 'Age'),
        y: unpack(rows, 'Female'),
        text: unpack(rows, 'Female'),
        textposition: 'auto',
        hoverinfo: 'none',
        name: 'Female',
        marker: {
            color: femaleColor,
        },
        type: 'bar'
    };

    const barData = [maleFatalitiesTrace, femaleFatalitiesTrace];

    const barLayout = {
        title: 'Cholera Fatalities by Gender and Age in the Naples Area',
        barmode: 'group',
        xaxis: {
            title: 'Age',
        },
        yaxis: {
            title: 'Number of Fatalities',
        },
    };

    Plotly.newPlot('gender_fatality_bar', barData, barLayout);

});
