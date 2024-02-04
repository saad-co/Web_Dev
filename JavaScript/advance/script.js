// var ans = (function () {
//   var privatevar = 0;
//   return {
//     getter: function()
//     {
//         console.log(privatevar);
//     },
//     setter: function(value)
//     {
//         privatevar = value;
//     }
//   };
// })();

// var g = ()=>12;
// var l = g();
// console.log(l);

var p = new Promise(function (res,rej) {
  if (true) {
    return res("first promise is resolved: ");
  } else {
    return rej("first promise is rejected: ");
  }
});

p.then(function (res) {
  console.log(res);
}).catch(function (rej) {
  console.log(rej);
});
