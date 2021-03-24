class Drops {
constructor(x,y){
    var options={
        friction=0.1,
    }
    this.r=10;
    this.body = Bodies.circle(x, y, this.r, options);  
    World.add(world, this.body);
}
update(){
  if(this.body.position.y>height){
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)} )
  }
}

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}
}