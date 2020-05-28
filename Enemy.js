class Enemy extends BaseClass {
    constructor(x, y){
        super(x,y,50,50);
        this.Visibility = 255;
    
    }

    display(){
        if(this.body.speed < 3){
            super.display();
        }
        else{
            World.remove(world, this.body);

            push();
            thhis.Visibility = this.Visibility - 5;
            tint(255, this.visibility);
            pop();
        }
    }

    score(){
        if(this.Visibility < 0 && this.Visibility > -1005){
            score++;
        }
    }

};