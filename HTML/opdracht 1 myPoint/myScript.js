const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let DotzArray = [];






animate();
function animate(){

  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  let Dotz = new Point(new Vector2d(getRandomNumber(canvas.width),getRandomNumber(canvas.height)),20, "#8D6BBF");
  DotzArray.push(Dotz);

  for(let i = 0; i < 400; i++){
    DotzArray[i].draw(context);
    Dotz.radius += 0.5;

  }
  if(Dotz.radius > 50){
    DotzArray.splice(i,1);
  }



}
  // if(Math.random() < 0.001){
  //   Dots.splice(0,1);
  //
  // }







function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
