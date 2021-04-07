class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/bird.png");
    }
    display(){
        var i = this.body.position
        i.x = mouseX;
         i.y = mouseY;
         super.display()
    }
}
    //     var options = {
    //         restitution: 1
    //     }
    //     this.body = Bodies.rectangle(x,y,50,50, options);
    //     this.width = 50;
    //     this.height = 50;
    //     this.image = loadImage("sprites/bird.png");
    //     World.add(world,this.body);
    // }
    // display(){
    // var i = this.body.position
    // i.x = mouseX;
    // i.y = mouseY;
    // var angle = this.body.angle
    // push ()
    // translate (i.x,i.y)
    // rotate (angle)
    // imageMode (CENTER)
    // strokeWeight (5);
    // stroke ("yellow");
    // fill ("red");
    // image(this.image,0,0,this.width,this.height)
    // pop (0)
    // }
    // }