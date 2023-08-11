class Walls{
    constructor(x, y, w, h, c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        
    }
    display(){
        rectMode(CENTER);
        fill(this.c)
        rect(this.x, this.y, this.w, this.h)
    }
}