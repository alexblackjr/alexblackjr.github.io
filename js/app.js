/**
 * Created by Alexander on 4/7/2016.
 */

var x,
    y,
    ans = false,
    expression = false,
    addition,
    subtraction,
    multiplication,
    division,
    sqrRoot,
    pct,
    rootTrim,
    addOut,
    minusOut,
    productOut,
    quotientOut;

//create the input and set the max length of the numbers to appear on the screen
function buttonValue(id) {
    if(typeof(x) !== "undefined" && x.length === 12){
        return x.substring(0,10);
    }else if(ans && expression === ""){
        ans = false;
        x = document.getElementById(id).value;
        document.getElementById('screen').innerHTML = x;
    }else if(typeof(x) === "undefined" || x === 0){
        x = document.getElementById(id).value;
        document.getElementById('screen').innerHTML = x;
    }else if(x === '-0'){
        x = "-";
        x += document.getElementById(id).value;
        document.getElementById('screen').innerHTML = x;
    }else{
        x +=  document.getElementById(id).value;
        document.getElementById('screen').innerHTML = x;
    }
}

//clear the screen and set back to zero
function clearAll(){
    document.getElementById("screen").innerHTML = "0";
    x = 0;
    y = 0;
    ans = false;
    expression = "";
}

//change numbers to decimals
function percent(){
    if(x){
        pct = x * 0.01;
        pct = pct.toString().substring(0,10);
        document.getElementById('screen').innerHTML = pct;
        x = pct;
    }else{
        pct = ans * 0.01;
        pct = pct.toString().substring(0,10);
        document.getElementById('screen').innerHTML = pct;
        ans = pct;
    }
}


//capture the mathematical expression
function grabNumber(id){
    if(expression){
       if( ( y !== 0 && x === 0 ) ){
           expression = document.getElementById(id).value;
            return y;
        }else if( (  ans !== false && y === 0 ) ){
           expression = document.getElementById(id).value;
            y = ans;
            x = 0;
            ans = false;
            return y;
        }else if(y === 0){
           answer();
            expression = document.getElementById(id).value;
        }
        else{
           answer();
            expression = document.getElementById(id).value;
        }
    }else if(ans){
        y = ans;
        x = 0;
        ans = false;
        expression = document.getElementById(id).value;

    }else{
        y = x;
        x = 0;
        ans = false;
        expression = document.getElementById(id).value;
    }
}


//change neg to pos or pos to neg
function changeSign(){
  if( x === 0 && ans === false ){
      x = '-0';
      document.getElementById('screen').innerHTML = x;
  }else if( ans !== false ){
      ans *= -1;
      document.getElementById('screen').innerHTML = ans;
  }else if(x){
    x *= -1;
    document.getElementById('screen').innerHTML = x;
  }else{
    ans *= -1;
    document.getElementById('screen').innerHTML = ans;
  }
}

//find the square root of a number
function squareRoot() {
    if (x > 0) {
        if(x.toString().indexOf('.') > -1){  //check for decimal
            sqrRoot = Math.sqrt(parseFloat(x));
            rootTrim = sqrRoot.toString().substring(0,10);
            document.getElementById('screen').innerHTML = rootTrim;
            ans = rootTrim;
            x = ans;
        }else {
            sqrRoot = Math.sqrt(parseInt(x));
            rootTrim = sqrRoot.toString().substring(0, 10);
            document.getElementById('screen').innerHTML = rootTrim;
            ans = rootTrim;
            x = ans;
        }
    }else {
        if(ans.toString().indexOf('.') > -1){  //check for decimal
            sqrRoot = Math.sqrt(parseFloat(ans));
            rootTrim = sqrRoot.toString().substring(0,10);
            document.getElementById('screen').innerHTML = rootTrim;
            ans = rootTrim;
            //x = ans;
        }else{
            sqrRoot = Math.sqrt(parseInt(ans));
            rootTrim = sqrRoot.toString().substring(0,10);
            document.getElementById('screen').innerHTML = rootTrim;
            ans = rootTrim;
            //x = ans;
        }
    }
}


//creates one decimal point
function setDecimal() {
    if (x.toString().indexOf('.') > -1) {
        return x;
    }else if(ans.toString().indexOf('.') > -1){
        return ans;
    }else{
        x += String.fromCharCode(46);
        document.getElementById('screen').innerHTML = x;
    }
}


//solves addition, subtraction, multiplication, and division equations. Checks for floating points and integers
function answer(){

    switch(expression){
         case "add":
             if(ans){
                 if( ans.toString().indexOf('.') ){
                     addition = parseFloat(x) + parseFloat(ans);
                     addOut = addition.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = addOut;
                     ans = addOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }else{
                     addition = parseInt(x) + parseInt(ans);
                     addOut = addition.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = addOut;
                     ans = addOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
             }else{
                 if( x.toString().indexOf('.') ){
                     addition = parseFloat(x) + parseFloat(y);
                     addOut = addition.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = addOut;
                     ans = addOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
                 addition = parseInt(x) + parseInt(y);
                 addOut = addition.toString().substring(0,10);
                 document.getElementById('screen').innerHTML = addOut;
                 ans = addOut;
                 expression = "";
                 x = 0;
                 y = 0;
                 break;
             }
            break;
         case "subtract":
             if(ans){
                 if( ans.toString().indexOf('.') ){
                     subtraction = parseFloat(ans) - parseFloat(x);
                     minusOut = subtraction.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = minusOut;
                     ans = minusOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }else{
                     subtraction = parseInt(ans) - parseInt(x);
                     minusOut = subtraction.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = minusOut;
                     ans = minusOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
             }else{
                 if( x.toString().indexOf('.') ){
                     subtraction = parseFloat(y) - parseFloat(x);
                     minusOut = subtraction.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = minusOut;
                     ans = minusOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
                 subtraction = parseInt(y) - parseInt(x);
                 minusOut = subtraction.toString().substring(0,10);
                 document.getElementById('screen').innerHTML = minusOut;
                 ans = minusOut;
                 expression = "";
                 x = 0;
                 y = 0;
                 break;
             }
         case "multiply":
             if(ans){
                 if( ans.toString().indexOf('.') ){
                     multiplication = parseFloat(x) * parseFloat(ans);
                     productOut = multiplication.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = productOut;
                     ans = productOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }else{
                     multiplication = parseInt(x) * parseInt(ans);
                     productOut = multiplication.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = productOut;
                     ans = productOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
             }else{
                 if( x.toString().indexOf('.') ){
                     multiplication = parseFloat(x) * parseFloat(y);
                     productOut = multiplication.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = productOut;
                     ans = productOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
                 multiplication = parseInt(x) * parseInt(y);
                 productOut = multiplication.toString().substring(0,10);
                 document.getElementById('screen').innerHTML = productOut;
                 ans = productOut;
                 expression = "";
                 x = 0;
                 y = 0;
                 break;
             }
         case "divide":
             if(ans){
                 if( ans.toString().indexOf('.') ){
                     division = parseFloat(ans) / parseFloat(x);
                     quotientOut = division.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = quotientOut;
                     ans = quotientOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }else{
                     division = parseInt(ans) / parseInt(x);
                     quotientOut = division.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = quotientOut;
                     ans = quotientOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
             }else{
                 if( x.toString().indexOf('.') ){
                     division = parseFloat(y) / parseFloat(x);
                     quotientOut = division.toString().substring(0,10);
                     document.getElementById('screen').innerHTML = quotientOut;
                     ans = quotientOut;
                     expression = "";
                     x = 0;
                     y = 0;
                     break;
                 }
                 division = parseInt(y) / parseInt(x);
                 quotientOut = division.toString().substring(0,10);
                 document.getElementById('screen').innerHTML = quotientOut;
                 ans = quotientOut;
                 expression = "";
                 x = 0;
                 y = 0;
                 break;
             }
         default:
            ans = '?';
            break;
     }
}

