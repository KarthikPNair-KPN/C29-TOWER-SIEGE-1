class PinkBox {
    constructor(x, y, width, height){
      var options = {
        isStatic:false,
        friction:0.1,
        density:0.0001
      };
      this.x=x
      this.y=y
      this.width=width
      this.height=height
      this.body=Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
    }
    display(){
      var pos=this.body.position
      pos.x=this.body.position.x
      pos.y=this.body.position.y

      strokeWeight(3);
      fill(251,193,203);
      rect(pos.x,pos.y,this.width,this.height);
    }
  };