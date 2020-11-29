var Chinaimage;
var china;
var coronaImg1,coronaImg2;
function preload()
{
Chinaimage = loadImage("Images/CHINA map.jpg");
coronaImg1 = loadImage("Images/corona1.png");
}

function setup() {
createCanvas(displayWidth-30,displayHeight-30);
china = createSprite(displayWidth/2,displayHeight/2,displayWidth-100,displayHeight-100);
china.addImage(Chinaimage);

  
}

function draw() {
  background("black");
  if(frameCount%150===0)
  {
    spawnCorona();
  }  
  drawSprites();
}
function spawnCorona()
{
  var corona = createSprite(random(100,800),random(100,800));
  corona.addImage(coronaImg1);
  corona.scale = 0.05;

}