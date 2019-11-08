const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;



let A = new Point(new Vector2d(500, 200),20, "#c693e6");
let B = new Point(new Vector2d(500, 500),20, "#9b5cbd");
A.drag();
B.drag();

let C = new Point(new Vector2d(800, 200), 20, "#9b80ff");
let D = new Point(new Vector2d(800, 500), 20, "#6a1fa1");
C.drag();
D.drag();

let S = new Point(new Vector2d(20, 20), 10, "white");
S.drag();


let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);


  l.DefineLineBetweenPoints(A,D);
  l.draw(context);
  m.DefineLineBetweenPoints(B,C);
  m.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.position.dx = l.interseption(m).x;
  S.position.dy = l.interseption(m).y;
  // S.position.dx = (m.intercept - l.intercept)/(l.slope - m.slope);
  // S.position.dy =  (l.slope * S.position.dx + l.intercept);
  S.draw(context);



}
animate();
