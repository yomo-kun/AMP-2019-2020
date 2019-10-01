class LinearFunction{
  constructor(slope, intercept){
    this.slope = slope;
    this.intercept = intercept;
  }

  calcY(x){
    return this.slope * x + this.intercept;
  }

  DefineLineBetweenPoints(a,b){
    this.slope = (b.position.dy - a.position.dy)/(b.position.x - a.position.dx);
    this.intercept = a.position.dy - this.slope * a.position.dx;
    
  }







}
