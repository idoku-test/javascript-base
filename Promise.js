// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms, 'done');
//     });
//   }
  
//   timeout(100).then(console.log)

// var p1 = new Promise(function (reslove,reject){
//     reslove('成功1');
// })

// var p2 = new Promise(function (resolve, reject) {
//     reject(new Error('失败1'));
//   });


// var p3 = new Promise(function (resolve, reject) {
//     reject(new Error('失败2'));
//   });


// var p4 = new Promise(function (resolve, reject) {
//     reslove('成功2');
//   });


// p1.then(p2).then(p3).then(p4).then(console.log,console.error)

// new Promise(function (resolve, reject) {
//     resolve(1);
//   }).then(console.log);
//   console.log(2);

setTimeout(function() {
    console.log(1);
  }, 0);
  
  new Promise(function (resolve, reject) {
    resolve(2);
  }).then(console.log);
  
  console.log(3);