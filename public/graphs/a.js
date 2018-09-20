/*
1. Read in choleraDeathLocations.csv and choleraPumpLocations.csv
2. Show a map of the locations of the deaths and pumps on a Leaflet/Plot.ly map of the current
London neighborhood using an appropriately centered and zoomed map. It should be obvious
which locations have more fatalities than other locations.
3. Come up with a layout of charts that makes good use of the CyberCANOE. The CyberCANOE has
a resolution of 6830x2160. [Users of Chart maker do not have to do this part of the exercise.]
*/

Plotly.d3.text("data/choleraDeathLocations.csv", function (text) {
    var data = d3.csvParseRows(text).map(function (row) {
        return row.map(function (value) {
            return +value;
        });
    });
    var deaths = [],
        longitude = [],
        latitude = [];
    for (let i = 0; i < data.length; i++) {
        deaths[i] = data[i][0];
    }
    for (let i = 0; i < data.length; i++) {
        longitude[i] = data[i][1];
    }
    for (let i = 0; i < data.length; i++) {
        latitude[i] = data[i][2];
    }
    var cellValues = [deaths, longitude, latitude];

    Plotly.d3.text("data/choleraPumpLocations.csv", function (t) {
        var pumps = d3.csvParseRows(t).map(function (r) {
            return r.map(function (v) {
                return +v;
            });
        });

        var pumpLongitude = [];
        var pumpLatitude = [];

        for (let i = 0; i < pumps.length; i++) {
            pumpLongitude[i] = pumps[i][0];
        }
        for (let i = 0; i < pumps.length; i++) {
            pumpLatitude[i] = pumps[i][1];
        }
        var pumpCellValues = [pumpLongitude, pumpLatitude];


        var map = L.map('fatality_map').setView([51.513, -0.137], 17);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoib3lhbGNpbiIsImEiOiJjam0zc29mbDEwdW1nM3JtdTd6NDJmdXFnIn0.QlWi2opj-m-jZlSOPNl_QA'
        }).addTo(map);

        // Add the markers for the death locations
        for (var i = 0; i < cellValues[2].length; i++) {
            var deathCircle = L.circle([cellValues[2][i], cellValues[1][i]], {
                color: 'black',
                fillColor: deathColor,
                fillOpacity: 0.85,
                radius: cellValues[0][i]
            }).addTo(map);
        }

        // Add the markers for the pump locations
        for (var i = 0; i < pumpCellValues[1].length; i++) {
            lat = pumpCellValues[1][i];
            lon = pumpCellValues[0][i];
            var polygons = L.polygon([
                    [lat + 0.0001, lon + 0.0001],
                    [lat + 0.0001, lon - 0.0001],
                    [lat - 0.0001, lon + 0.0001],
                    [lat - 0.0001, lon - 0.0001],
                ], {
                    color: 'black',
                    fillColor: 'blue',
                    fillOpacity: 0.9
                }).addTo(map);
        }

        function getSize(d) {
            return d > 119 ? "84" :
                d > 69 ? "48" :
                d > 39 ? "30" :
                d > 14 ? "26" :
                d > 4 ? "18" :
                d > 1 ? "14" :
                d > 0 ? "9" : "6";
        }
        var legend = L.control({
            position: 'bottomright'
        });


        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend');
            var grades = [1, 2, 5, 15, 40, 70, 120];
            var labels = ["<h3>Death Counts</h3>"];
            labels.push("<p style='text-align:center;'>You may hover over the figures to obtain more info</p>");
            for (var i = 0; i < grades.length; i++) {
                labels.push('<div class="tooltip"><div class="circle" style="width:' + getSize(grades[i]) + 'px; height:' + getSize(grades[i]) + 'px">' + '<span class="tooltiptext">' + grades[i] + '</span></div></div>');
            }
            labels.push('<div class="tooltip"><span class="tooltiptext">Pump</span><img src="data/waterpump.png"></div>')
            div.innerHTML = labels.join('');
            return div;
        };

        legend.addTo(map);
    });
});