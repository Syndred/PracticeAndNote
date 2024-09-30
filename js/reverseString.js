// 字符串反转：字符串没有反转的方法改所以需先将字符串转换为数组，然后用reverse()方法反转后用join()将数组转换为字符串。
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("he  llo"));
const names = ["Alice", "Bob", "Charlie"];
// join方法：将数组转换为字符串，默认为逗号分隔。
const namesStr = names.join(" ");
console.log(namesStr);