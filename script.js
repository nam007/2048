
var canvas=document.getElemntById("canvas");
var ctx=canvas.getContext("2d");
var sizeinput = document.getElementById("size");
var changeSize=document.getElementById("change-size");
var scoreLabel = document.getElementById("score");
var score=0;
var size=4;
var width = canvas.width/ size-5;
var cells = []
var fontsize;
var loss = false;
startGame();

function startGame(){
	createCells();
	drwaCells();
}

function cell(row, coll){
	this.value =0;
	this.x = coll * width + 5*(coll +1);
	this.y = row * width + 5* (row +1);
}
function createCells(){
	for(var i=0;i<size;i++){
		cells[i] = [];
	for(var j=0;j<size;j++){
		cells[i][j]=new cell{i,j};	
	}
	}
}



function drawCell(cell){
	ctx.beginPath();
	ctx.rect(cell.x, cell.y, width, width);
	switch(cell.value){
		case 0: ctx.fillStyle = "#FF0000"; break;
		case 2: ctx.fillStyle="FFE633" ;break;
		case 4: ctx.fillStyle="FF33FB" ;break;
		case 8: ctx.fillStyle="FF6733" ;break;
		case 16: ctx.fillStyle="9DFF33" ;break;
		case 32: ctx.fillStyle="C533FF" ;break;
		case 64: ctx.fillStyle="FF3364" ;break;
		case 128: ctx.fillStyle="A333FF" ;break;
		case 256: ctx.fillStyle="33FFEB" ;break;
		case 512: ctx.fillStyle="33C3FF" ;break;
		case 1024: ctx.fillStyle="7E33FF" ;break;
		case 2048: ctx.fillStyle="FF33FB" ;break;
		case 4096: ctx.fillStyle="FF33FB" ;break;
		default : ctx.fillStyle="FF33FC" ;


	}

ctx.fill();
if(cell.value){
	fontsize = width /2;
	ctx.font = fontsize + "px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign ="center";
	ctx.fillText(cell.value, cell.x+width/2, cell.y+width /2);
	}
}
function drwaCells(){
	for(var i=0;i<size ;i++){
		for(var j=0;j<size;j++){
			drawCell(cell[i][j]);
		}
	}
}	
