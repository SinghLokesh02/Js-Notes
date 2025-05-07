const path = require("node:path")


console.log(path.dirname(process.cwd()))

console.log(path.basename(process.cwd()))

console.log(path.extname("index.javaScript.js"))

console.log(path.join(process.cwd(),__filename))

console.log("Dir : ",__dirname)

 