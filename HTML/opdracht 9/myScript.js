const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
//balls
let A = new Point(new Vector2d(500,500),20, "#E38DE3");
A.drag();
let B = new Point(new Vector2d(800,499),25, "#6d2e82");
B.drag();
let C = new Point(new Vector2d(700,300),30, "#D0C0FC");
C.drag();
// let D = new Point(new Vector2d(300, 300), 50, "red");
// D.drag();

//center
let S = new Point(new Vector2d(0,0),10, "white");

//medians
let mAB = new Point(new Vector2d(0,0), 5, "#65207B");
let mBC = new Point(new Vector2d(0,0), 10, "#65207B");
let mCA = new Point(new Vector2d(0,0), 15, "#65207B");

//lines
let lineAB = new LinearFunction(1,1,3,"#D7B6EE");
let lineBC = new LinearFunction(1,1,3,"#871785");
let lineCA = new LinearFunction(1,1,3,"#5EAFB6");

//centroid lines
let lineA = new LinearFunction(1,1,0, "#C6BCC9");
let lineB = new LinearFunction(1,1,0, "#C6BCC9");
let lineC = new LinearFunction(1,1,0, "#C6BCC9");

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


  mAB.position.dx = lineA.interseption(lineBC).x;
  mAB.position.dy = lineA.interseption(lineBC).y;
    mAB.draw(context);

  mBC.position.dx = lineB.interseption(lineCA).x;
  mBC.position.dy = lineB.interseption(lineCA).y;
    mBC.draw(context);

  mCA.position.dx = lineC.interseption(lineAB).x;
  mCA.position.dy = lineC.interseption(lineAB).y;
    mCA.draw(context);










//outer lines


  lineA.slope = -1/lineBC.slope;
  lineA.intercept = A.position.dy - lineA.slope*A.position.dx;
  lineA.draw(context);

  lineB.slope = -1/lineCA.slope;
  lineB.intercept = B.position.dy - lineB.slope*B.position.dx;
  lineB.draw(context);

  lineC.slope = -1/lineAB.slope;
  lineC.intercept = C.position.dy - lineC.slope*C.position.dx;
  lineC.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);


}
animate();
