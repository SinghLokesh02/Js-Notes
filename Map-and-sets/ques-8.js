let string = "swiss";
let uniq = new Map();
for (data of string) {
  if (uniq.has(data)) {
    let count = uniq.get(data) + 1;
    uniq.set(data, count);
  } else {
    uniq.set(data, 1);
  }
}

 

for (data of string) {
  if (uniq.get(data) == 1) {
    console.log(data);
    break;
  }
}
