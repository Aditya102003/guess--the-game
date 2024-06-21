
const colorCodeContainer =document.getElementById("color-code");


const optionContainer  = document.getElementById("options-container")
let score=0;
const  scoreContainer = document.getElementById('score');
let randomColor ; 
function generateRndomNumberBetween(min,max){
    // generatign the random value between the 0 and 255
     let val  =min  +Math.floor(Math.random() * (max-min +1));
    //  console.log(val);
     return val;

}
function incrementScore(){
    score+=1;
    scoreContainer.innerHTML=score;
}
function ValidateResult(el){
    // console.log(el.target);
    const selectedColor = el.target.style.backgroundColor;
  
    if(selectedColor == randomColor)
        {
            incrementScore();
        }
        else 
        {
            score=0;
        }
        window.localStorage.setItem('score',score);
        startGame();


   

}

function generateRndomColorRGB() {
const red  = generateRndomNumberBetween(0,255);
const green  = generateRndomNumberBetween(0,255);
const blue = generateRndomNumberBetween(0,255);
return `rgb(${red}, ${green}, ${blue})`;
}
function startGame(){
    score =Number( window.localStorage.getItem('score')) ?? 0;

    scoreContainer.innerText=score;



    optionContainer.innerHTML=null;
    randomColor = generateRndomColorRGB();
console.log(colorCodeContainer);
    colorCodeContainer.innerText = randomColor;
    
    const ansIndex = generateRndomNumberBetween(0,5);
    console.log(ansIndex);

    for(let i=0;i<6;i++)
{
const div = document.createElement('div');
div.addEventListener("click",ValidateResult)

div.style.backgroundColor =  i===ansIndex ?randomColor: generateRndomColorRGB();
optionContainer.append(div);
}


}
window.addEventListener("load", () => startGame())

