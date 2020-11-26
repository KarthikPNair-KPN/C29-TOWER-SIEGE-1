class SlingShot{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingSho = Constraint.create(options1);
        World.add(world, this.slingSho);
    }
    fly(){
        this.slingSho.bodyA = null;
    }
    attach(){
        this.slingSho.bodyA = rock.body;   
    }
    display(){
        if(this.slingSho.bodyA != null){
        var pointA = this.slingSho.bodyA.position;
        var pointB = this.slingSho.pointB;
        strokeWeight(8);
        stroke(70,225,199);
        line(pointA.x+50, pointA.y+40, pointB.x+50, pointB.y+10);
        }
    }
    
}