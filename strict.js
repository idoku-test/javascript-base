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

// function f(){
//     'use strict'
//     this.a = 1;
// };
// f()

// function fun()
// {
//     return this;
// }
// //console.log(fun())
// console.log(fun.call(2))
// console.log(fun.call(true))
// console.log(fun.call(null))
// console.log(fun.call(undefined))

// function fun()
// {
//     'use strict'
//     return this;
// }
// //console.log(fun())
// console.log(fun.call(2))
// console.log(fun.call(true))
// console.log(fun.call(null))
// console.log(fun.call(undefined))

// function f1(){
//     'use strict'
//     f1.caller;
// }

// f1()

// function f1(){
//     'use strict'
//     return arguments.callee;
// }
// f1()

// 'use strict'
// var x;
// delete x;

// (function () {
//     //'use strict';
//     var x = 2;
//     console.log(eval('var x = 5; x')) // 5
//     console.log(x) // 2
//   })()

function f(a)
{
    'use strict'
    a = 2;
    return [a,arguments[0]];
}
console.log(f(1))