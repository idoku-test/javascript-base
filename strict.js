//'use strict'
//'abc'.length=5

// var obj = {
//   get v() { return 1; }
// };
// obj.v = 2;

// v = 1;
// console.log(v)
// for(i = 0 ;i <2 ;i++)
// console.log(i)
// function f(){
//     return x = 123;
    
// }
// console.log(f());

// function f(){
//     'use strict';
//     console.log(this === global)
//     console.log(this === undefined)
// }
// f()

function f(){
    'use strict'
    this.a = 1;
};
f()