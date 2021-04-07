class Box extends BaseClass{
constructor(x,y,width,height){
    super(x,y,width,height)
    this.image = loadImage("sprites/wood1.png")
}

}

//     var options = {
//         restitution: 1
//     }
//     this.body = Bodies.rectangle(x,y,width,height, options);
//     this.width = width;
//     this.height = height;
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
// stroke ("red");
// fill ("yellow");
// rect(0,0,this.width,this.height)
// pop (0)
// }
// }