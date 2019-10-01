const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
var now = 1;
let Dots = [];
let DotColor = ['#ffb3ff','#9933ff','#ffcce6','#9966ff'];
let MaxDots = 10;

function Start(){
  for(let i = 0;i < MaxDots; i++){
    addDots();
  }
}

Start();
animate();



  setTimeout(function () {
    for(let i = 0; i < 10; i++){
    Counter.innerHTML = now += i;
  }
   }, 3000);



function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);



  for(let i = 0; i < Dots.length; i++){
    Dots[i].draw(context);
    Dots[i].drag();

  }
context.beginPath();
context.moveTo(Dots[0].position.dx,Dots[0].position.dy);
  for(let i = 0; i < Dots.length; i++){

    //console.log(Dots.index());

    context.lineTo(Dots[i].position.dx,Dots[i].position.dy);

  }
context.strokeStyle = "#cc99ff";
context.fillStyle = "#cc99ff";
context.fill();
context.closePath();
context.stroke();
}

function RandomColour(){
  let color = "";
  Math.floor(Math.random() * 5 ) = color;
  let endColour = DotColor[color];
  return endColour


}



function addDots(){

  let Dotz = new Point(new Vector2d(getRandomNumber(canvas.width),getRandomNumber(canvas.height)),20, "#8D6BBF");
  Dots.push(Dotz);
  console.log('they have been pushed');
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
