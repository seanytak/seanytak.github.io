const tableHeaderColor = 'rgba(75, 75, 75, 1.0)';
const genericColumnColor = 'rgba(228, 222, 249, 0.65)';

const attackColor = 'rgba(70, 70, 35, 0.45)';
const deathColor = 'rgba(230, 0, 35, 0.65)';

function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
};

function accumulate_sum(arr) {
    const new_arr = [parseInt(arr[0])]
    for (i = 1; i < arr.length; i++) {
        new_arr[i] = new_arr[i - 1] + parseInt(arr[i])
    }
    return new_arr
};