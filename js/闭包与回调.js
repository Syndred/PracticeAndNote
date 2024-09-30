// 闭包是一个函数，它能够“记住”并访问其外部作用域的变量。闭包通常是在一个函数内部定义另一个函数，并返回这个内部函数。这个返回的函数可以继续访问外部函数的变量，即使外部函数已经执行完毕。
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
console.log(fnInside(5)); // 8
// 当outside(3)的时候，相当于返回一个内置了x=3的inside()函数
// 所以outside(3)(5)相当于内置了x=3的inside(5)
console.log(outside(3)(5));

//注意到上例中 inside 被返回时 x 是怎么被保留下来的。一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 inside 没有再被引用时，内存才会被释放。

// 回调函数：函数接收一个回调函数作为参数，在合适的时机调用这个回调函数。
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "小明", age: 25 };
    callback(data); // 调用回调函数
  }, 1000);
}

fetchData(function (result) {
  console.log("获取到的数据：", result);
});

// 闭包与回调的关系
// 相互关联：闭包返回的函数可以作为回调函数使用，特别是在需要访问外部作用域变量的情况下。例如，您可以定义一个闭包并将其作为回调函数传递给其他函数。
// 不同的目的：闭包主要用于封装和保持状态，而回调函数主要用于处理异步操作和事件。

// 闭包也可作为回调函数
function delayLog(message) {
    return function() {
        console.log(message);
    };
}

const logHello = delayLog('你好，世界！');
setTimeout(logHello, 1000); // 1秒后输出：你好，世界！