class BaseClass{
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 1,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world,this.body);
    }
    display(){
    var i = this.body.position
    var angle = this.body.angle
    push ()
    translate (i.x,i.y)
    rotate (angle)
    imageMode (CENTER)
    strokeWeight (5);
    stroke ("yellow");
    fill ("red");
    image(this.image,0,0,this.width,this.height)
    pop (0)
    }
    }