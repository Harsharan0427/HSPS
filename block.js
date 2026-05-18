let a = 3;
var b = 2;
function add(x, y) {
  a = 5;
  var b = 4;
  console.log(a);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  return x + y;
}

add(1, 2);
