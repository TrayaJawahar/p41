const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var canvas;
var umbrella;
var drops=[];
var maxDrops=100;
function preload(){
    
}

function setup(){
   canvas= createCanvas(0,0,400,1000);
   engine = Engine.create();
   world = engine.world;


   umbrella= new Umbrella(10,10,10,10);
if(World.frameCount%200==0){
   for(var i=0;i<maxDrops;i++){
       drops.push(new Drops(random(0,400),random(0,400)));
   }
}  
}

function draw(){
    
umbrella.display();
Drops.update();
Drops.display();



    drawSprites();
}   

