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
    divdiv.counter = "0";
    divdiv.addEventListener("mouseover",()=>{
        
        addColor(divdiv);
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
        divdiv.counter = "0";
        divdiv.addEventListener("mouseover",()=>{
            
            addColor(divdiv);
        });
        let flexValue = 100/boxesPerSide;
        divdiv.style.flex = "1 0 "+flexValue+"%";
        //divdiv.style.width = 100/boxesPerSide +"%";
    }

}

function resetBox(){
    let table = container.childNodes;
    for(let i = 0;i < table.length;i++){
        table[i].style.backgroundColor = "RGB(255,255,255)";
        table[i].counter = "0";
    }
}

function addColor(elem){
    console.log(elem.counter);
    let counter2;
    switch(elem.counter){
        case "0":
            elem.style.backgroundColor = "#999999";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "1":
            elem.style.backgroundColor = "#888888";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "2":
            elem.style.backgroundColor = "#777777";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "3":
            elem.style.backgroundColor = "#666666";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "4":
            elem.style.backgroundColor = "#555555";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "5":
            elem.style.backgroundColor = "#444444";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "6":
            elem.style.backgroundColor = "#333333";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "7":
            elem.style.backgroundColor = "#222222";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "8":
            elem.style.backgroundColor = "#111111";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "9":
            elem.style.backgroundColor = "#000000";
            counter2 = parseInt(elem.counter);
            counter2 += 1;
            elem.counter = counter2.toString();
            break;
        case "10":
            break;
    }
}
