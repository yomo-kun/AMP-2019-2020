class Point {
  constructor(position,radius,color,label){
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "#EDB7E0";
    context.fillStyle = this.color;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.font = "12px Arial";
    context.fillText(this.label, this.position.dx-20, this.position.dy-this.radius-10);
  }

  click(){
      let mousePos = {};
        let dragStatus = false;


            document.addEventListener('mousedown', (evt)=>{
              mousePos.x = evt.clientX;
              mousePos.y = evt.clientY;
              if(this.distanceToAnOtherPoint(mousePos) <= this.radius){
                this.color = "#FCCAC5";
                clickedBalls += 1;
              }
            })

  }

  drag(){
    let dragStatus = false;
    let mousePos = {};

    document.addEventListener('mousedown', (evt)=>{
      mousePos.x = evt.clientX;
      mousePos.y = evt.clientY;

      if(this.distanceToAnOtherPoint(mousePos) <= this.radius){
        dragStatus = true;

      } else{
        dragStatus = false;
      }
    })

    document.addEventListener('mousemove', (evt)=>{
      mousePos.x = evt.clientX;
      mousePos.y = evt.clientY;


      if(this.distanceToAnOtherPoint(mousePos) <= this.radius){
        canvas.style.cursor = "grab";
        event.stopImmediatePropagation();
      } else{
        canvas.style.cursor = "not-allowed";
      }

      if(dragStatus){
        this.position.dx = mousePos.x;
        this.position.dy = mousePos.y;
      }
    })

    document.addEventListener('mouseup', (evt)=>{
      dragStatus = false;
    })
  }

  distanceToAnOtherPoint(P){
    let dx = this.position.dx - P.x;
    let dy = this.position.dy - P.y;
    return Math.sqrt(dx*dx + dy*dy);
  }



}
