class Log extends BaseClass {
    constructor(x, y, width, height){
        super(x, y, 20, height, angle);
        Matter.Body.setAngle(this.body, angle);
    }
}