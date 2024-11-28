let mapA = new Map([["a", 1], ["b", 2], ["c", 3]]);
let mapB = new Map([["b", 4], ["c", 5], ["d", 6]]);

let k1 = [...mapA.keys()]
let k2 =[...mapB.keys()]

ans = [... new Set(k1.filter((element) => k2.includes(element)))]
console.log(ans);


