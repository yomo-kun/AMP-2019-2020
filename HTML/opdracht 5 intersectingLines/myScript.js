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
let point3 = new Point(new Vector2d(500,500),20, "#B3F0DD");
point3.drag();
let point4 = new Point(new Vector2d(1000,500),20, "#173DA7");
point4.drag();

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  point1.draw(context);
  point2.draw(context);
  point3.draw(context);
  point4.draw(context);
}
animate();
