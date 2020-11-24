class ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
       this.bodies = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.bodies);
       this.bodies.width = w;
       this.bodies.height = h;
    }

    display(){
        var pos = this.bodies.position;
        rectMode(CENTER)
        fill(180,25,0)
        rect(pos.x,pos.y,this.bodies.width,this.bodies.height)

    }
}