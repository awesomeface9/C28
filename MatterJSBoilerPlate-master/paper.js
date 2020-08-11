 class Paper
 {
     constructor(x, y, r)
     {
         var options={
             'isStatic':false,
             "restitution":0.3,
             'friction':0.5,
             'density':1.2
         }
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(x,y,r,options);
    this.r=this.r;
    World.add(world, this.body);
     }
     display()
     {
         var pos=this.body.position;
         ellipseMode(RADIUS);
         ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
         
         image(this.image,300,70);
     }
 }