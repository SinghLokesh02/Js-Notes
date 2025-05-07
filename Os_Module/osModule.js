const os = require("node:os");


console.log(os.platform())
console.log(os.freemem()/ (1024 * 1024 * 1024))
console.log(os.uptime())

console.log(os.homedir())

console.log(os.arch())

console.log(os.hostname())


console.log(os.totalmem() / (1024 * 1024 * 1024))

console.log(os.userInfo())