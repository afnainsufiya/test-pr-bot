// bad-code.js
const mysql = require('mysql');

function getUser(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId  // SQL injection!
  db.query(query)

  var password = "admin123"  // hardcoded secret!

  if(true) {  // useless condition
    console.log("user fetched")
  }
}

function doEverything(a,b,c,d,e,f) {  // too many params!
  for(var i=0;i<9999;i++) {  // performance issue!
    for(var j=0;j<9999;j++) {
      console.log(a+b+c+d+e+f)
    }
  }
}
function ioie(a,b,c,d,e,f) {  // too many params!
  for(var i=0;i<9999;i++) {  // performance issue!
    for(var j=0;j<9999;j++) {
      console.log(a+b+c+d+e+f)
    }
  }
}


