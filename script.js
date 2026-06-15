const start = document.querySelector(".start");
const box = document.querySelector(".box");
const score = document.querySelector(".score");
const gameOver = document.querySelector('.game-over')
const restart = document.querySelector('.restart')
const returning = document.querySelector('.returning-counter')
const pointsScored = document.querySelector('.pointsScored')
const homeScreen = document.querySelector('.home-screen')
const homeBox = document.querySelector('.home-box')
const play = document.querySelector('.play')

const timer = document.querySelector(".timer");
let time = 0;
let scoreValue = 0;
let returningText = 5;

const wanderBox = function (boxColor,boxName) {
  let rY = Math.floor(Math.random() * (100 - 19 + 1)) + 19;
  let rX = Math.floor(Math.random() * (100 - 27 + 1)) + 27;
  boxName.style.top = `calc(${rY}% - 80px)`;
  boxName.style.left = `calc(${rX}% - 80px)`;

  boxName.style.backgroundColor = boxColor;
};

const randomColor = function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
if(homeScreen.style.display !="none"){
    setInterval(() => {
        wanderBox(randomColor(),homeBox)
        
    },900);
}
play.addEventListener('click',()=>{
    homeScreen.style.display = "none"
})

start.addEventListener("click", () => {
  wanderBox(randomColor(),box);
    start.classList.add('disabled')    

  let gameInterval = setInterval(() => {
    time += 1;
    timer.textContent = time;

    wanderBox(randomColor(),box);
  }, 1000);
  // clearInterval(gameInterval)

  setTimeout(() => {
    clearInterval(gameInterval);
    gameOver.style.display = "flex"
    pointsScored.textContent = score.textContent;
    setInterval(() => {
        returningText-=1
        returning.textContent=returningText;
        if(returningText==0) {
            console.log("Returning text is zero");
            location.reload()
        }
        else { console.log(returningText, "Not zero?")}
    }, 1000);
  }, 10000);
  // console.log(`calc(${rX}% - 80px)`)
  // console.log(`calc(${rY}% - 80px)`)
});


//===================
//     BOX CLICK
//===================

box.addEventListener('click',()=>{
        scoreValue+=1;
        score.textContent=scoreValue;
        
})

restart.addEventListener('click',()=>{
    location.reload()
})