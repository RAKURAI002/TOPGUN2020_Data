const tf = require('@tensorflow/tfjs-node');
const neatCsv = require('neat-csv');
const fs = require('fs')
var OneHot = require('one-hot');

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [4] }));
model.add(tf.layers.dense({units: 10 }));
model.add(tf.layers.dense({units: 4 }));
model.compile({ loss: 'binaryCrossentropy', optimizer: 'sgd' });

// Input data
// Array of days, and their capacity used out of 
// 100% for 5 hour period
const xs = tf.tensor([
  [11, 23, 34, 96],
  [12, 23, 43, 23],
  [12, 23, 56, 56],
  [13, 34, 56, 67]
]);

// Labels
const ys = tf.tensor2d([1, 2, 3, 4], [4, 1])
console.log(ys)

// Train the model using the data.


model.fit(xs, ys, {
        epochs: 20,        
        callbacks: {
            onEpochEnd: (epoch, log) => {
                console.log(`Epoch ${epoch}: loss = ${log.loss}`)
            }
        }
    });
    setTimeout(function(){



    }, 2000); 
save = async function () { await model.save('file:///tmp/The model');};
save();

console.log("5555555555555")