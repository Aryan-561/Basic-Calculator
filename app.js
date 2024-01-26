let input = document.querySelector("#screen input");
let isOpr = false;
document.querySelectorAll("#btns .nums").forEach((btn)=>{
        btn.addEventListener("click",()=>{
         let numBtn = btn.innerText;
        if(input.value == "0"){
            input.value = numBtn;
        }
        else{
            input.value += numBtn;
        }
        opr();
    })
})

oprBtns = document.querySelectorAll("#btns .opr");
oprBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       oprBtn = btn.innerText;
        if(isOpr){
            if(oprBtn == "-" && (input.value[input.value.length-1]== "*" || input.value[input.value.length-1] == "/")){
                input.value += oprBtn;
                opr(true);  
            }
            else{

                input.value = input.value.slice(0,input.value.length-1)+ oprBtn;
            }
        }
        else if(oprBtn == "-" && input.value == "0"){
            input.value = oprBtn;
        }
        else{
        input.value += oprBtn;
        }
        isOpr=true;
    })
});

let deci = document.querySelector("#btns #dec");
deci.addEventListener("click",()=>{
    if(input.value[input.value.length-1] != "."){
        input.value += deci.innerText;
    }
})

document.querySelector("#clear").addEventListener("click",()=>{
    input.value="0";
    opr();

});

document.querySelector("#backspace").addEventListener("click",()=>{
    input.value = input.value.slice(0,input.value.length-1);
    if(input.value == ""){
        input.value = "0";
    }
    opr();
})

document.querySelector("#res").addEventListener("click",calculate);

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(error){
        input.value = `error`;
        setTimeout(()=>{
            input.value ="0";
        },1000)
    }
    opr();
}

function oprDisabled(boolen){
    oprBtns.forEach((btn)=>{
        btn.disabled = boolen; 
    })
}

function opr(){
    oprDisabled(false);
    isOpr= false;
}