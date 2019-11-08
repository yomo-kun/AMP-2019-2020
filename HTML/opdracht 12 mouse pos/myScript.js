const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let midX = canvas.width/2;
let midY = canvas.height/2;


let mousePos = {};
let point = new Point(new Vector2d(200,200),20,"green");
point.drag();

document.addEventListener('mousemove', (evt)=>{

  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;
  console.log(mousePos);
})

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

//arrow tekenenmaken
  context.save();
  context.translate(midX,midY);

  context.beginPath();
  context.moveTo(0,0);//begin
  context.lineTo(0, 30);//eerste lijn
  context.lineTo(100, 30);//2e lijn
  context.lineTo(100, 60);//begin punt
  context.lineTo(150, 15); //punt
  context.lineTo(100, -30);
  context.lineTo(100, 0);
  context.closePath();
  context.fillStyle = "cyan";
  context.fill();
  context.stroke();

  context.rotate(Math.atan2((mousePos.x - midX),(mousePos.y - midY)));
  point.position.dx = mousePos.x;
  point.position.dy = mousePos.y;
  point.draw(context);
  context.restore();

  //code movement


}
animate();
