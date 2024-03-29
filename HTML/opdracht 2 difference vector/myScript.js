const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let clickedBalls = 0;

let myArray = [];

let maxBalls = 10;


ballsInArray();
function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  if(clickedBalls == maxBalls){
    myArray.splice(0,10);
    ballsInArray();
    clickedBalls = 0;

}
myArray[0].draw(context);
  for(let i = 0; i < myArray.length; i ++){
    myArray[i].draw(context);

  }
}

function ballsInArray(){
  for(let i = 0; i < maxBalls; i++){
  let myPoint = new Point(new Vector2d(getRandomNumber(canvas.width),getRandomNumber(canvas.height)),20, "#CDDAD1");
  myPoint.click();
  myArray.push(myPoint);
  }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

animate();
