class Umbrella{
    constructor(x,y){
        var options = {
            'isStatic':true
        }
        this.img=loadImage("images/W/1.png");
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(215,447,95,options);
        World.add(world, this.body);
        
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(200, 500);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0,380,380);
        pop();
        //ellipseMode(RADIUS);
        //fill("brown");
        //ellipse(pos.x, pos.y,95);
    }
    
}
