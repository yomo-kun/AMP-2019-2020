const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point1 = new Point(new Vector2d(300,500), 20,"purple");
point1.drag();
let point2 = new Point(new Vector2d(500,300), 20,"purple");
point2.drag();
let point3 = new Point(new Vector2d(700,500), 20,"purple");
point3.drag();



function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  context.beginPath();
  context.setLineDash([]);
  context.fillStyle = "rgba(175, 112, 204, 05)";
  context.moveTo(point1.position.dx,point1.position.dy);
  context.lineTo(point2.position.dx,point2.position.dy);
  context.lineTo(point3.position.dx,point3.position.dy);
  context.fill();
  context.closePath();
  context.stroke();
  point1.draw(context);
  point2.draw(context);
  point3.draw(context);
}

animate();
