class LinearFunction{
  constructor(slope, intercept, LineW, color){
    this.slope = slope;
    this.intercept = intercept;
    this.LineW = LineW || 1;
    this.color = color || "red";
  }

  calcY(x){
    return this.slope * x + this.intercept;
  }

  DefineLineBetweenPoints(a,b){
    this.slope = (b.position.dy - a.position.dy)/(b.position.dx - a.position.dx);
    this.intercept = a.position.dy - this.slope * a.position.dx;

  }

  draw(context){
    context.beginPath();
    context.lineWidth = this.LineW;
    context.strokeStyle = this.color;
    context.moveTo(0,this.calcY(0));
    context.lineTo(canvas.width, this.calcY(canvas.width));
    context.closePath();
    context.stroke();
  }

  interseption(m){
    let ans = {};
    ans.x = (m.intercept - this.intercept)/(this.slope - m.slope);
    ans.y =  this.calcY(ans.x);
    return ans;
  }






}
