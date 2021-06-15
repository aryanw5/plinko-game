class Plinko {
    constructor(x, y, r) {
        var options ={
            restitution:0.4
        
        }
        this.r=r;

        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.position;

       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       ellipseMode(RADIUS);
       ellipse(0, 0, this.r.this.r);
       pop();

       for(var j = 40; j<= width; j=j+50)
       {
         plinkos.push(new Plinko (j,75));
       }
       for (var j = 15; j<=width-10; j=j+50)
       {
         plinkos.push(new Plinko (j,175));
       }
       
       
    }
};