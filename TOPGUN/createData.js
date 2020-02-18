function createData(num_pts) {
    var xs = [], ys = [];
    for(i = 0; i < num_pts; i++)
    {
        xs[i] = i;
        ys[i] = 2 * xs[i] + Math.random(0,1);
    }
    return {xs, ys};
}

module.exports = createData;