// function f(){
//     console.log(2)
// }
// console.log(1);
// setTimeout(f,1000);
// console.log(3);

// setTimeout(function f(a,b){
//     console.log(a+b);
// },1000,1,2);

// var x = 1;
// var obj = {
//   x: 2,
//   y: function () {
//     console.log(this.x);
//   }
// };

// setTimeout(function(){
//     obj.y()
// }, 1000) // 1
// setTimeout(obj.y.bind(obj),1000);

// var timer = setInterval(function() {
//     console.log(2);
//   }, 1000)

//自己写的一个延迟函数 
// function sleep(ms) {
//   var start = Date.now();
//   while ((Date.now() - start) < ms) {
//   }
// }

// setTimeout(() => {
//   console.log(2)
// }, 1000);
// sleep(10000)

setTimeout(() => {
  console.log(1);
}, 0);
console.log(2)