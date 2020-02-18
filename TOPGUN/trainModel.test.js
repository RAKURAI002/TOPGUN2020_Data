const trainModel = require("./trainModel");
const createData = require("./createData");
const createModel = require("./createModel");
const tf = require('@tensorflow/tfjs-node');

var data = createData(num_pts = 30);
var model = createModel(num_nodes = 100);
var xs = tf.tensor1d(data.xs);
var ys = tf.tensor1d(data.ys);

temp = (trainModel(model, xs, ys, 5).length);

test('num_pts is 10', () => {
    expect(temp.length.toBe(5));

});
