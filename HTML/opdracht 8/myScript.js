const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
//balls
let A = new Point(new Vector2d(200,400),20, "#d18be8");
A.drag();
let B = new Point(new Vector2d(1000,400),25, "#6d2e82");
B.drag();
let C = new Point(new Vector2d(800,300),30, "#e1bfe3");
C.drag();
// let D = new Point(new Vector2d(300, 300), 50, "red");
// D.drag();

//center
let S = new Point(new Vector2d(0,0),10, "white");

//medians
let mAB = new Point(new Vector2d(0,0), 5, "blue");
let mBC = new Point(new Vector2d(0,0), 10, "blue");
let mCA = new Point(new Vector2d(0,0), 15, "blue");

//lines
let lineAB = new LinearFunction(2,1);
let lineBC = new LinearFunction(1,4);
let lineCA = new LinearFunction(1,1);

//centroid lines
let lineA = new LinearFunction(1,1);
let lineB = new LinearFunction(1,1);
let lineC = new LinearFunction(1,1);

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);


//define lines

  //point lines
  context.beginPath();
  context.lineWidth = 4;
  lineAB.DefineLineBetweenPoints(A,B);
  lineAB.draw(context);

  lineBC.DefineLineBetweenPoints(B,C);
  lineBC.draw(context);

  lineCA.DefineLineBetweenPoints(C,A);
  lineCA.draw(context);
  context.stroke();

  //centroid lines
  context.beginPath();
  context.lineWidth = 1;
  lineA.DefineLineBetweenPoints(mAB,C);
  lineB.DefineLineBetweenPoints(mBC,A);
  lineC.DefineLineBetweenPoints(mCA,B);
  context.strokeStyle = 'white';
  lineC.draw(context);
  lineA.draw(context);
  lineB.draw(context);
  context.stroke();


//positions

  S.position.dx = lineA.interseption(lineB).x;
  S.position.dy = lineA.interseption(lineB).y;

  mAB.position.dx = (A.position.dx + B.position.dx)/2;
  mAB.position.dy = (A.position.dy + B.position.dy)/2;
  mAB.draw(context);

  mBC.position.dx = (B.position.dx + C.position.dx)/2;
  mBC.position.dy = (B.position.dy + C.position.dy)/2;
  mBC.draw(context);

  mCA.position.dx = (C.position.dx + A.position.dx)/2;
  mCA.position.dy = (C.position.dy + A.position.dy)/2;
  mCA.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
  // D.draw(context);

}
animate();
