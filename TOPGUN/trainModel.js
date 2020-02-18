const createData = require("./createData");
const createModel = require("./createModel");
const tf = require('@tensorflow/tfjs-node');

var data = createData(num_pts = 30);
var model = createModel(num_nodes = 100);
var xs = tf.tensor1d(data.xs);
var ys = tf.tensor1d(data.ys);

async   function trainModel(model, xs, ys, epochs) {

    var temp = [];

    await model.fit(xs, ys, {
        epochs: epochs,        
        callbacks: {
            onEpochEnd: (epoch, log) => {
                console.log(`Epoch ${epoch}: loss = ${log.loss}`)
                temp = [...temp, log.loss];
            }
        }
    });
    console.log(temp);
    
   return temp;
   //return 999;

};

function qwer()
{return 888;}



aa = trainModel(model, xs, ys, 5);
//bb = aa();


setTimeout(function() {var size = Object.keys(aa);setTimeout(function() { console.log(size);
    
}, 1000);}, 1000);




console.log("555");
console.log(typeof(aa));
console.log("555");


module.exports = trainModel;

