let boxes=document.querySelectorAll(".box");
let resetbox=document.querySelector(".resetbtn");
let newgame=document.querySelector(".nwbtn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turn0=true;

let winptn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
     box.addEventListener("click" , ()=>{
        if(turn0){
            box.innerText="x";
            turn0=false;
        }
        else{
            box.innerText="o";
            turn0=true;
        }
        box.disabled = true;
        
        checkwinner();
     });
});

const newGame= () =>{
    turn0=true;
    enableBoxes();
    msgcont.classList.add("hide");

}


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
}

const showwinner = (winner) =>{
     msg.innerText=`Congratulation, Winner is '${winner}'`;
     msgcont.classList.remove("hide");
}

const disabledBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkwinner = () => {
    for(let pattern of winptn){  
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!=""  && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner",pos1);
                disabledBoxes();
                showwinner(pos1);

            }
        }

    }
}


newgame.addEventListener("click", newGame);
resetbox.addEventListener("click", newGame);