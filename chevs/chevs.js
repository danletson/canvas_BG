// "Chevs" canvas element background generator
// Copyright 2013 Daniel Letson
// canvas.daniel-letson.com

$(document).ready(function(){

var canvas = $("#c")[0]; //initialize your canvas element here

canvas.width = $(window).width(); //comment this out if you're not using this as a background
canvas.height = $(window).height();

var ctx = canvas.getContext("2d");


function drawShapes(color1, color2, size, ratio, spacingX, spacingY){
	width = $(canvas).width();
	height = $(canvas).height();
	var x=0;
	var y=0;
	var colorFactor = 0;
	var ratioDec = ratio/100;

	while (x<=width){
		
		while(y<=height){

		colorFactor = Math.random();

			if(colorFactor<ratioDec){
				ctx.fillStyle = color1;
			} else {
				ctx.fillStyle = color2;
			}

			chevron(x,y,size);
			y+=(size*1.0)+(spacingY*1.0);
		}

		x+=(size*1.0)+(spacingX*1.0);
        y=0;    
    }
}

function chevron(x, y, l){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(Math.floor(Math.random()*4)*(Math.PI/2));
	ctx.beginPath();
	ctx.lineTo(l,-l);
	ctx.lineTo(l,0);
	ctx.lineTo(0,l);
	ctx.lineTo(-l,0);
	ctx.lineTo(-l,-l);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}

drawShapes('#111111', '#000000', 50, 50, 0, 0); // grab settings from canvas.daniel-letson.com/chevs

});