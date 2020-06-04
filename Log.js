class Log extends BaseClass {
    constructor(x, y, width, height, angle){
        super(x, y, 20, height, angle);
        Matter.Body.setAngle(this.body, angle);
    }
}