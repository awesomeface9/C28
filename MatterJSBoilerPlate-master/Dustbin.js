class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.image=loadImage("dustbingreen.png");
        this.bodya=Bodies.rectangle(x,y,width,height, options);
        World.add(world, this.bodya);
        this.bodyr=Bodies.rectangle((x-(width/2)),(y-(height*2)), height, width/2, options);
        World.add(world, this.bodyr);
        this.bodyb=Bodies.rectangle((x+(width/2)),(y-(height*2)), height, width/2, options);
        World.add(world, this.bodyb);
        this.bodya.width=width;
        this.bodya.height=height;
    }
    display(){
        
        rect(this.bodya.position.x, this.bodya.position.y, this.bodya.width, this.bodya.height);
        rect((this.bodya.position.x-(this.bodya.width/2)), (this.bodya.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))),this.bodya.height, this.bodya.width/2);
        rect((this.bodya.position.x+(this.bodya.width/2)), (this.bodya.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))),this.bodya.height, this.bodya.width/2);
        image(this.image,390,100,10);
    }

}