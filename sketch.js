const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var hexa;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var platform;
var pull;
function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3=new Box(390,235,30,40);
  box4=new Box(420,235,30,40);
  box5=new Box(450,235,30,40);
  box6=new Box(360,195,30,40);
  box7=new Box(390,195,30,40);
  box10=new Box(330,275,30,40);
  box11=new Box(360,275,30,40);
  box12=new Box(390,275,30,40);
  box13=new Box(420,275,30,40);
  box14=new Box(450,275,30,40);
  box15=new Box(480,275,30,40);
  box16=new Box(300,275,30,40);
  box8=new Box(420,195,30,40);
  box9=new Box(390,155,30,40);
  platform=new Ground(390,305,220,20);
  hexa=new poly(1000,200,50);
  pull=new Rope(hexa.body, {x:1000,y:200});
  Engine.run(engine)
  
}

function draw() {
  background(146, 0, 54);  
  Engine.update(engine);
  fill("black")
	textSize(25);
	text("Drag the hexagonal stone and release it to launch it towards the blocks.Press space to try again",300 ,700);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  platform.display();
  pull.display();
  hexa.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

pull.fly();



}
function keyPressed() {
  if(keyCode === 32){
Matter.Body.setPosition(hexa.body,{x:1000, y:200});
pull.attach(hexa.body);

 
 }
}