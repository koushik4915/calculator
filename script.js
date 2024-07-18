let values=document.querySelectorAll("#input");
let  output=document.querySelector(".output");
let clear=document.querySelector(".clear");
let equal=document.querySelector("#equal");


let string="";

equal.addEventListener("click", (e)=>{
    let input=output.innerText;
    let result=eval(input);
    output.innerText=result;
    string="";
});


clear.addEventListener("click", (e)=>{
    output.innerText="0";
    string="";
});

values.forEach(value => {
    value.addEventListener("click", (e)=>{
        string=string+value.innerText;
        output.innerText=string;
    });
});

