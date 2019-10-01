const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;



let point1 = new Point(new Vector2d(500,200),20, "#6866BA");
point1.drag();
let point2 = new Point(new Vector2d(1000,200),20, "#AB73EE");
point2.drag();
let line1 = new LinearFunction(2,10);
let startPoint = new Point(new Vector2d(50,line1.calcY(0)),20, "yellow");
let endPoint = new Point(new Vector2d(1500,line1.calcY(0)),20, "yellow");





console.log(line1.calcY(0));


function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  //line1.DefineLineBetweenPoints(point1,point2);

  startPoint.position.dx = 0;
  startPoint.position.dx //line1.calcY(0);

  endPoint.position.dx = canvas.width;
  endPoint.position.dy = line1.calcY(canvas.width);

  //console.log(line1.calcY(canvas.width));

  startPoint.draw(context);
  endPoint.draw(context);

  context.beginPath();
  context.moveTo(startPoint.position.dx,startPoint.position.dy);
  context.lineTo(endPoint.position.dx,endPoint.position.dy);
  //console.log("draw line",endPoint.position.dx,endPoint.position.dy);
  context.stroke();

  point1.draw(context);
  point2.draw(context);


}
animate();
