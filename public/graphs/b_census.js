Plotly.d3.csv("data/UKcensus1851.csv", function (err, rows) {

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

    let maleTotal = accumulate_sum(unpack(rows, 'Male'));
    let femaleTotal = accumulate_sum(unpack(rows, 'Female'));

    let populationTotal = []

    for (let i = 0; i < maleTotal.length; i++) {
        populationTotal[i] = parseInt(unpack(rows, 'Male')[i]) + parseInt(unpack(rows, 'Female')[i]);
    }

    headerValues.push('Total')
    cellValues.push(populationTotal)

    const tableData = [{
        type: 'table',
        columnwidth: [15, 10, 10, 10],
        columnorder: [0, 1, 2, 3],
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
                color: [genericColumnColor, maleColor, femaleColor, genericColumnColor]
            },
            font: {
                family: "Arial",
                size: 10,
                color: ["black"]
            }
        }
    }];

    const tableLayout = {
        title: "UK Census for 1851"
    };

    Plotly.plot('population_table', tableData, tableLayout);

    const totalMalesTrace = {
        x: unpack(rows, 'Age'),
        y: unpack(rows, 'Male'),
        // text: unpack(rows, 'Male'),
        // textposition: 'auto',
        hoverinfo: 'none',
        name: 'Male',
        marker: {
            color: maleColor,
        },
        type: 'bar'
    };

    const totalFemalesTrace = {
        x: unpack(rows, 'Age'),
        y: unpack(rows, 'Female'),
        // text: unpack(rows, 'Female'),
        // textposition: 'auto',
        hoverinfo: 'none',
        name: 'Female',
        marker: {
            color: femaleColor,
        },
        type: 'bar'
    };

    const barData = [totalMalesTrace, totalFemalesTrace];

    const barLayout = {
        title: 'Male vs. Female Population by Age Group',
        barmode: 'group',
        xaxis: {
            title: 'Age',
        },
        yaxis: {
            title: 'Population Count',
        }
    };

    Plotly.newPlot('population_chart', barData, barLayout);

    const genderPieHeight = 400;

    malePieColors = [];

    function scaleColors(n, r, g, b) {
        arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(`rgba(${r + 10*i}, ${g - 10*i}, ${b - 10*i}, ${0.1*i + 0.1})`);
        }
        return arr;
    }

    malePieColors = scaleColors(unpack(rows, 'Male').length, 50, 100, 230);

    const malePopulationTrace = [{
        values: unpack(rows, 'Male'),
        labels: unpack(rows, 'Age'),
        name: 'Age',
        marker: {
            colors: malePieColors,
        },
        rotation: -90,
        type: 'pie'
    }];

    Plotly.newPlot('male_population', malePopulationTrace, {
        title: 'UK Census for 1851: Male Population by Age Group', height: genderPieHeight
    })

    femalePieColors = scaleColors(unpack(rows, 'Male').length, 235, 200, 25);

    const femalePopulationTrace = [{
        values: unpack(rows, 'Female'),
        labels: unpack(rows, 'Age'),
        marker: {
            colors: femalePieColors,
        },
        rotation: -90,
        type: 'pie'
    }];

    Plotly.newPlot('female_population', femalePopulationTrace, {
        title: 'UK Census for 1851: Female Population by Age Group', height: genderPieHeight,
    })

    const males = unpack(rows, 'Male').reduce(function (total, num) {
        return parseInt(total) + parseInt(num)
    });
    const females = unpack(rows, 'Female').reduce(function (total, num) {
        return parseInt(total) + parseInt(num)
    });

    const totalPopulationTrace = [{
        values: [males, females],
        labels: ['Male', 'Female'],
        marker: {
            colors: [maleColor, femaleColor]
        },
        type: 'pie'
    }];

    Plotly.newPlot('total_population', totalPopulationTrace, {title: 'UK Census for 1851: Total Population by Gender', height: genderPieHeight * Math.SQRT2})

});
