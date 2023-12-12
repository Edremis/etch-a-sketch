const container = document.querySelector("#container");
const changeButton = document.getElementById("changeBox");
const resetButton = document.getElementById("resetBox");
let boxesPerSide = 4;

for(let i = 0; i<(boxesPerSide*boxesPerSide);i++){
    const newDiv = document.createElement("div");
    newDiv.id = "div"+i;
    newDiv.className = "box";
    newDiv.style.border = "1px solid black";
    //newDiv.style.padding = "12%";
    container.appendChild(newDiv);
}

for(let i = 0; i<(boxesPerSide*boxesPerSide);i++){
    let a = "div"+i;
    const divdiv = document.getElementById(a);
    divdiv.addEventListener("mouseover",()=>{
        divdiv.classList.add("blue");
    });
}

changeButton.addEventListener("click",function(){
    rebuildBox(chooseBoxSize());
    });
resetButton.addEventListener("click",function(){
        resetBox();
        });

function chooseBoxSize(){
    return prompt("Choose number of boxes per side:")
}

function rebuildBox(numberPerSide){
    
    for(let i = 0; i <(boxesPerSide*boxesPerSide);i++){
    let idName = "div" + i;
    const dividi = document.getElementById(idName);
    container.removeChild(dividi);
}
    boxesPerSide = numberPerSide;


    for(let i = 0; i<(boxesPerSide*boxesPerSide);i++){
        const newDiv = document.createElement("div");
        newDiv.id = "div"+i;
        newDiv.className = "box";
        newDiv.style.border = "1px solid black";
        //newDiv.style.padding = "12%";
        container.appendChild(newDiv);
    }
    
    for(let i = 0; i<(boxesPerSide*boxesPerSide);i++){
        let a = "div"+i;
        const divdiv = document.getElementById(a);
        divdiv.addEventListener("mouseover",()=>{
            divdiv.classList.add("blue");
        });
        let flexValue = 100/boxesPerSide;
        divdiv.style.flex = "1 0 "+flexValue+"%";
        //divdiv.style.width = 100/boxesPerSide +"%";
    }

}

function resetBox(){
    let table = container.childNodes;
    for(let i = 0;i < table.length;i++){
        table[i].classList.remove("blue");
    }
}
