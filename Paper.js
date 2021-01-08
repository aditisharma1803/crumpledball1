class Paper
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,


        }
        	

        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }
    display()
    {   
        
        var paperpos=this.body.position;
        push()
       // translate(paperpos.x,paperpos.y);
        ellipseMode(CENTER)
        strokeWeight(3);
        fill(255);
        ellipse(paperpos.x,paperpos.y,this.width,this.height);
        pop()
    }
}