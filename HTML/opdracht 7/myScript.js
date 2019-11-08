const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let bal = new Point(new Vector2d(200,400),20, "#d18be8");
bal.drag();
let bal2 = new Point(new Vector2d(1000,400),20, "#6d2e82");
bal2.drag();
let bal3 = new Point(new Vector2d(800,300),20, "#e1bfe3");
bal3.drag();
let S = new Point(new Vector2d(0,0),10, "white");
let l = new LinearFunction(1,1);
let m =new LinearFunction(1,1);


function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  m.slope = -1/l.slope;
  m.intercept = bal3.position.dy - m.slope*bal3.position.dx;
  S.position.dx = l.interseption(m).x;
  S.position.dy = l.interseption(m).y;

  l.DefineLineBetweenPoints(bal,bal2);
  l.draw(context);
  m.draw(context);
  bal.draw(context);
  bal2.draw(context);
  bal3.draw(context);
  S.draw(context);


}
animate();
