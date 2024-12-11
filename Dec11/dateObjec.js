console.log("Hello");

// Date
const date = new Date()
let dateStr = date.toString();

// Year
let year = date.getFullYear();
console.log(year);

// Month
let month = date.getMonth()+1;
const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 console.log(month);  // 10
console.log(monthArr[month-1]);

// Day
let day = date.getDate();
console.log(day);

// Hour
let hour = date.getHours();
console.log(hour);  

// Minute
let minute = date.getMinutes();
console.log(minute);

// Second
let second = date.getSeconds();
console.log(second);

// Day
let dayOfWeek = date.getDay();
let dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(dayOfWeek);  // 0 - 6
console.log(dayArr[dayOfWeek]);
