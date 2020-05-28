class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.height = height;
        this.width = width;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(101,67,33);
        rect(ps.x , pos.y , thus.width , this.height);
    }
};