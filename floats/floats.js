// "Floats" canvas element background generator
// Copyright 2013 Daniel Letson
// canvas.daniel-letson.com

$(document).ready(function(){

var canvas = $("#c")[0]; //initialize your canvas element here

canvas.width = $(window).width(); //comment this out if you're not using this as a background
canvas.height = $(window).height();

var ctx = canvas.getContext("2d");


function drawShapes(spacing, gridSpacing, size, color1, color2, color3, bg_color, stroke, stroke2){
	width = $(window).width();
	height = $(window).height();
	var shapeFactor = 0;
	var gridX = 0;
	var gridY = 0;
	var x = 0;
	var y = 0;
	ctx.shadowColor = "none";
	ctx.strokeStyle = color2;
	ctx.lineWidth = stroke2;
	ctx.fillStyle = bg_color;
	ctx.fillRect(0,0,width, height);


	while (gridX<=width){



		while (gridY<=height){

            ctx.beginPath();
            ctx.lineTo(0,gridY);
			ctx.lineTo(width,gridY);
			ctx.closePath();
			ctx.stroke();

			gridY+= (gridSpacing*1.0);
			
		
		}

		
		ctx.beginPath();
		ctx.lineTo(gridX, height);
		ctx.lineTo(gridX,0);
		ctx.closePath();
		ctx.stroke();

		gridX+=(gridSpacing*1.0);
		// gridY=0;

	}

	ctx.shadowOffsetX = size/6;
	ctx.shadowOffsetY = size/6;
	ctx.shadowBlur = stroke;
	ctx.shadowColor = color3;
	console.log(color3);
	ctx.lineWidth = stroke;


	while (x<=width){

		while (y<=height){

			ctx.lineWidth = stroke;
			ctx.strokeStyle = color1;
			shapeFactor = Math.random();
            if (shapeFactor<0.33){
            	triangle(x+(Math.random()*spacing*0.75),y+(Math.random()*spacing*0.75), size);
            } else if (shapeFactor<0.66){
            	zig(x+(Math.random()*spacing*0.75),y+(Math.random()*spacing*0.75), size);
            } else {
            	circle(x+(Math.random()*spacing*0.75),y+(Math.random()*spacing*0.75), size);
            }
            
            y = y+(spacing*1.0);

		}
	
    x = x+(spacing*1.0); 
    y = 0;       
            
    }
}

function triangle(x, y, h){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(Math.random()*(Math.PI/2));
	ctx.beginPath();
	ctx.lineTo((0.5*h), ((0.5*h)*Math.sqrt(3)));
	ctx.lineTo(h, 0);
	ctx.lineTo(0, 0);
	ctx.closePath();
	ctx.stroke();
	console.log(y);
	ctx.restore();
}

function zig(x, y, l){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(Math.random()*(Math.PI));
	ctx.beginPath();
	ctx.lineTo(0,0);
	ctx.lineTo(l, 0);
	ctx.lineTo(0, l);
	ctx.lineTo(l,l);
	ctx.stroke();
	console.log(y);
	ctx.restore();
	
}

function circle(x, y, r){
	ctx.beginPath();
	ctx.arc(x,y,r/2,0,Math.PI*2,true);
	ctx.stroke();
}

drawShapes(300, 100, 50, "rgba(119,119,119,1.0)", "rgb(68,68,68)", "rgba(0,0,0,0.8)", "rgba(34,34,34,1.0)", 1, 1); // grab settings from canvas.daniel-letson.com/floats

});

