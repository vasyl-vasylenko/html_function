"use strict";


const usdCurr = 28,
      eurCurr = 32;
function convert(amount, curr){
    console.log(amount * curr);
}

convert(500, usdCurr);
convert(400, eurCurr);