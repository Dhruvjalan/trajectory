class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x >200 && this.body.velocity.x > 10){
    var position = [this.body.position.x, this.body.position.y]
    this.trajectory.push(position);
    }
    for(var a = 0; a<this.trajectory.length; a = a+1){
      
         image (this.image2, this.trajectory[a][0], this.trajectory[a][1]);
    }
    super.display();
  }
}
