class Log extends BaseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle);
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle);
    }
        }
    //     var options = {
    //         restitution: 1,
    //         friction:1.5
    //     }
    //     this.body = Bodies.rectangle(x,y,20,height, options);
    //     this.width = 20;
    //     this.height = height;
    //     Matter.Body.setAngle(this.body,angle);
    //     World.add(world,this.body);
    // }
    // display(){
    // var i = this.body.position
    // var angle = this.body.angle
    // push ()
    // translate (i.x,i.y)
    // rotate (angle)
    // rectMode (CENTER)
    // strokeWeight (5);
    // stroke ("yellow");
    // fill ("brown");
    // rect(0,0,this.width,this.height)
    // pop (0)
    // }
    // }