const os = require('os');

// userinfo() returns userinfo about current user
const user = os.userInfo();
// console.log(user);

// uptime() method returns the device uptime in seconds
// console.log(`Your device uptime is ${os.uptime()} seconds`);

const currentOs={
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs);