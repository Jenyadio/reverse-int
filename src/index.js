module.exports = function reverse (n) {
  let str = Math.abs(n).toString().split("").reverse().join("");
  let result;

  for(let i = 0; i < str.length - 1; i++) {
    if(str.startsWith('0')) {
        result = +str.slice(1);
    } else {
        result = +str;
    }
  }

  return result;
}
