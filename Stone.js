class Paper{
    constructor (x,y,radius) {
      var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage ("paper.png");
      World.add(world ,this.body);
    }
  
     
   display(){
        
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(RADIUS);
    image(this.image,0,0,this.radius,this.radius);
    pop();
  
   }
  }
   
class Stone{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'friction':1,
            'density':1.2,
            'restitution': 0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.r=radius;
        this.image=loadImage("Plucking Mangoes/stone.png");
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}