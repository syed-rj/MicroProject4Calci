// add script and finish the display and calculation  part 
// then iterate over design
// optimization in calcualation
let allInputs = document.querySelectorAll('.input')
console.log(allInputs);
let inputs = [];
let oprnds = [];
let operators = [];


allInputs.forEach((input) => {
    input.addEventListener("click", addAndDisplay);
    console.log("running");
    // input.style.color="black";
    function addAndDisplay() {
        let val = input.textContent;
        console.log(val);
        if (val !== "*" && val !== "-" && val !== "+" && val !== "/" && val !== "DEL") {
            if (val !== "0"&& val !== ".")
                inputs.push(parseInt(val));
                else if(val==="."){
                    console.log(document.querySelector("input").value);
                    console.log("trying tu put . ");
                    if(inputs[inputs.length - 1] !== "."){
                        // console.log(inputs+".");
                        console.log("  .  pushed");  
                     inputs.push(val);
                    }
                 }
            else
                if (inputs.length !== 0 && inputs[inputs.length - 1] !== "*" && inputs[inputs.length - 1] !== "-" && inputs[inputs.length - 1] !== "+" && inputs[inputs.length - 1] !== "/")
                    inputs.push(parseInt(val));
        } else {
            if (inputs.length !== 0 && inputs[inputs.length - 1] !== "*" && inputs[inputs.length - 1] !== "-" && inputs[inputs.length - 1] !== "+" && inputs[inputs.length - 1] !== "/" && inputs[inputs.length - 1] !== "=")
                if (val !== "DEL")
                    inputs.push(val)
        }
        console.log(inputs);
       display();
    }

});

function display(){
    let str = "";
    inputs.forEach((i) => {
        str += i;

    })
    
    document.querySelector('#inputs').value= str.replace('*','x');
    return str;
    // console.log(str);
}
document.querySelector('#reset').addEventListener("click",reset)
    
    // if(inputs)
   

function reset(){
        document.querySelector('#inputs').value="";
        inputs=[];
        display();
        
}
document.querySelector('#answer').addEventListener("click",(e)=>{
    let str1=display();
    console.log(str1);
  if(str1){
  let ans=calc(str1);
  document.querySelector('#inputs').value=ans;
  console.log(ans);
   inputs=[];
   if(ans)
   inputs.push(ans)
  
}
    // if(inputs)
   
})


document.querySelector("#DEL").addEventListener("click",del)

function del(){
    inputs.pop();
    display();
}

function calc(str1){
    return Function(`'use strict'; return (${str1})`)();
}

