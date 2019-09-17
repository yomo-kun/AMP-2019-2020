const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let Dots = [];

function Start(){
  for(let i = 0;i < Dots.length; i++){
    addDots();
  }
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  Start();

  for(let i = 0; i < Dots.length; i++){
    Dots[i].draw(context);
  }


}


animate();

function addDots(){
  let Dotz = new Point(new Vector2d(getRandomNumber(canvas.width),getRandomNumber(canvas.height),50));
  Dots.push(Dotz);
  console.log('they have been pushed');


}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
