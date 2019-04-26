/*jshint -W030*/
/*jshint -W014*/
/*jshint -W119*/
/*jshint expr:true*/

let str = "урок-3- был слишком легким";

// First 
function jsUcfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// console.log(jsUcfirst(str));

// Second
let  sp = str.replace(/\-+/g, ' '),
    spc = sp.replace(/\  +/g, ' '),
    space = jsUcfirst(spc);
   // console.log(space);

// Third

let r = space.slice(19, -1),
    re = space.slice(-1),
    res = r + re;
// console.log(res);

let n = res.slice(0, 4),
    ne = "o",
    newStr = n + ne;
// console.log(newStr);


// Forth
let arr = [20, 33, 1, "Человек", 2, 3],
    array = arr.filter(Number);
   // console.log(array);
  
  let sqrArr = array.map(x => x ** 2);

  function arraySum(sqrArr) {
    var sum = 0;
    for (var i = 0; i < sqrArr.length; i++) {
      sum += sqrArr[i];
    }
    //console.log(sum);
    let result = Math.sqrt(sum);
    //console.log(result);
  }

arraySum(sqrArr);

// Fifth

var arg = 4343;
function lastchance(arg){
  if ((typeof (arg)) == 'string') {
    // arg = arg.replace(/\s/g, "");
    // console.log(arg);
    let a = arg.replace(/^\s/, ""),
        ar = a.replace(/\s+$/, "");
    //console.log(ar);
    if (ar.length > 50) {
      let length = 50,
      trArr = ar.length > length ? ar.substring(0, length - 3) + "..." : ar;
      console.log(trArr);
    }
  } else {
    console.log(typeof (arg));
    alert('Eror not a string');
  }
}

lastchance(arg);

