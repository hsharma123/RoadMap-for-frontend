let display = document.getElementById("display");

function appendValue (val){
    allowChar = '0123456789-+/*.%sqrt()';
    if(allowChar.includes(val))
    display.value += val;
}
function clearDisplay(){
    display.value ="";
}
function deleteLast(){
    display.value = display.value.slice(0,-1)
}
function calculate(){
    try{
       let result = display.value.replace("sqrt","Math.sqrt" ).replace("**2", "**2");
       display.value(result);
    }catch{
        display.value = "error";
        
    }
}
function toggleSign(){
    let value = display.value;
    if(value.startWith("-")){
       display.value = display.value.slice(1);
    } else{
        display.value = "-" + value;
    }

}