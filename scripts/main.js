var narizX=0
var narizY=0
function preload() {
	salto=loadSound
	("Recursos/jump.wav")
	PERDISTE=loadSound("Recursos/gameover.wav")
	MONEDA=loadSound("Recursos/coin.wav")
	INICIAR=loadSound("Recursos/world_start.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas=createCanvas(gameConfig.screenX,gameConfig.screenY);
	canvas.parent("juego")
	video=createCapture(VIDEO)
	video.parent("controles")
	video.size(600,250)
	ia=ml5.poseNet(video,listo)
	ia.on("pose",resultado)
	instializeInSetup(mario);
	INICIAR.play()
}

function draw() {
	game()
}
function listo(){
console.log("Estoy LISTO")
}
function resultado(respuesta){
if(respuesta[0]){
narizX=respuesta[0].pose.nose.x
narizY=respuesta[0].pose.nose.y
}
}






