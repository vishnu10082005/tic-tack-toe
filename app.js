// Rough file
// let arr = ["aman","pranshu","nasir","addarsh"]
// let obj = {
//     name : "sravan",
//     age : 16,
//     clg : "lpu",
//     food : "biryani"
// }
//  'in' is used for getting keys
// 'of' is used for getting values
// for (element in arr){
//     console.log(element)
// }


// listing down all the winning combinations
let winningCombinations = [
    [1,2,3],  // Vertical 
    [4,5,6],  // Vertical 
    [7,8,9],  // Vertical 
    [1,4,7],  // Horizontal
    [2,5,8],  // Horizontal
    [3,6,9],  // Horizontal
    [1,5,9],  // Diagonal
    [3,5,7],  // Diagonal
]

// accessing all boxes

let boxelement = document.querySelectorAll(".box")

// Providing eventlisteners to all the boxes
for(elem of boxelement){
    elem.addEventListener("click", handleClick);
}

let click = 0;
let isWon = false;
let xAttempts = [];
let OAttempts = []; 

function handleClick(event){
    // console.log(event.target)
    let id = event.target.id;                // FOR TAKING THE ID OF THE BOX
    let ptag = document.createElement("p");
    ptag.style.color = "#FAB201"
    boxelement[id-1].appendChild(ptag)
    if(click%2==0){
        ptag.textContent = "X"
        click++
        xAttempts.push(parseInt(id));
        console.log(xAttempts)
        result (xAttempts , "X")
    }else{
        ptag.textContent = "O"
        click++
        OAttempts.push(parseInt(id));
        console.log(OAttempts)
        result (OAttempts , "O")
        }
    if((click == 9) && (isWon==false)){
        setTimeout(()=>{
        resultbox.style.visibility = "visible";
        messageBox.textContent = "It's a Draw";
        },2000)
    }    
}

let resultbox =document.querySelector("#result")
let messageBox=document.querySelector("#message")

function result(playerArray , player){
    console.log(player,playerArray)
    for(let i=0;i<winningCombinations.length;i++){
        console.log(winningCombinations[i])
        let check = true;
        for(let j=0;j<winningCombinations[i].length;j++){
            if(playerArray.includes(winningCombinations[i][j])== false){
                check = false;
                break;
            }
        }
        if(check==true){
            isWon = true;
            resultbox.style.visibility = "visible";
            messageBox.textContent = player + " Won the match"
            console.log(player , "won the match")
        }
    }

}

var playAgain = document.getElementById("button")
playAgain.addEventListener("click",()=>{
    location.href = "./index.html";
    // location.reload()
    // history.go(0);
})



//  Alternate methods for the above for loop 
// winningCombinations.map((value ,index)=>{
//     console.log(index)
// })

// for(elem in winningCombinations){
//     console.log(winningCombinations[elem])
// }