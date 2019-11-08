const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
//balls
let A = new Point(new Vector2d(500,500),20, "#E38DE3", "A");
A.drag();
let B = new Point(new Vector2d(800,499),25, "#6d2e82", "B");
B.drag();
let C = new Point(new Vector2d(700,300),30, "#D0C0FC", "C");
C.drag();
// let D = new Point(new Vector2d(300, 300), 50, "red");
// D.drag();

//center
let S = new Point(new Vector2d(0,0),10, "white");

//medians
let mAB = new Point(new Vector2d(0,0), 5, "yellow", "mAB");
let mBC = new Point(new Vector2d(0,0), 10, "blue", "mBC");
let mCA = new Point(new Vector2d(0,0), 15, "red", "mCA");

//lines
let lineAB = new LinearFunction(1,1,3,"red", "lineAB");
let lineBC = new LinearFunction(1,1,3,"orange", "lineBC");
let lineCA = new LinearFunction(1,1,3,"black", "lineCA");

//centroid lines
let lineA = new LinearFunction(1,1,0, "green", "lineA");
let lineB = new LinearFunction(1,1,0, "white", "lineB");
let lineC = new LinearFunction(1,1,0, "blue", "lineC");

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

//line outer lines
  lineAB.DefineLineBetweenPoints(A,B);
  lineAB.draw(context);
  lineBC.DefineLineBetweenPoints(B,C);
  lineBC.draw(context);
  lineCA.DefineLineBetweenPoints(C,A);
  lineCA.draw(context);

//interseptions centroid lines with outer lines


  mAB.position.dx = (A.position.dx + B.position.dx)/2;
  mAB.position.dy = (A.position.dy + B.position.dy)/2;
  mAB.draw(context);

  mBC.position.dx = (B.position.dx + C.position.dx)/2;
  mBC.position.dy = (B.position.dy + C.position.dy)/2;
  mBC.draw(context);

  mCA.position.dx = (C.position.dx + A.position.dx)/2;
  mCA.position.dy = (C.position.dy + A.position.dy)/2;
  mCA.draw(context);



  S.position.dx = lineA.interseption(lineB).x;
  S.position.dy = lineA.interseption(lineB).y;
  S.draw(context);







//outer lines


  lineA.slope = -1/lineAB.slope;
  lineA.intercept = mAB.position.dy - lineA.slope*mAB.position.dx;
  lineA.draw(context);

  lineB.slope = -1/lineBC.slope;
  lineB.intercept = mBC.position.dy - lineB.slope*mBC.position.dx;
  lineB.draw(context);

  lineC.slope = -1/lineCA.slope;
  lineC.intercept = mCA.position.dy - lineC.slope*mCA.position.dx;
  lineC.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);


}
animate();
