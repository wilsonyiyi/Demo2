//块作用域
//当用let声明一个变量， 它使用的是词法作用域 或 块作用域
//if语句块 、 函数体内 、 for循环
// try {
//  throw new Date(); // 抛出当前时间对象 
// } catch (e) {
//  console.log(e.toLocaleString()); // 使用本地格式显示当前时间 
// }
var numLiveForCat = 9;
var kitty = {
    name: "Tom",
    numLives: numLiveForCat
};
//error
// kitty = {
//     name: "wang",
//     numLives: numLiveForCat
// }
kitty.name = "wang";
//解构
var input = [1, 2, 3, 4];
var first = input[0];
// console.log(first);
var last = input[3];
console.log(last);
