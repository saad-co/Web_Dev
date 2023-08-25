// let obj = {
//     name : "rana saad",
//     age : 19,
//     degree : "BSIT"
// };

// for(let a in obj)
// {
//     console.log(a," : ",obj[a]);
// }

// first class functions

function fun(a){
    a();
}

fun(function(){console.log("Hello i am a function passed into another function:");});

