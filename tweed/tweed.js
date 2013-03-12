// "Tweed" canvas element background generator
// Copyright 2013 Daniel Letson
// canvas.daniel-letson.com

$(document).ready(function(){

var canvas = $("#c")[0]; //initialize your canvas element here

canvas.width = $(window).width(); //comment this out if you're not using this as a background
canvas.height = $(window).height();

var ctx = canvas.getContext("2d");


function drawLines(color1, color2, color3, bg_color, length, density, stroke){
	width = $(window).width();
	height = $(window).height();

	ctx.lineWidth = stroke;
	var space = width*height;
    console.log(space);
    var numLines = (space/100000)*density;
    var x = 0;
    var y = 0;
    var factor = 0;
    ctx.fillStyle = bg_color;
    ctx.fillRect(0,0,width, height);
    ctx.fillStyle = "none"
    ctx.save();

    while(x<=numLines/2){
    	factor = Math.random();
    	if(factor<0.33){
    		ctx.strokeStyle = color1;
    	} else if (factor<0.66) {
    		ctx.strokeStyle = color2;
    	} else {
    		ctx.strokeStyle = color3;
    	}

    	xThread(Math.random()*width, Math.random()*height, length);
	    yThread(Math.random()*width, Math.random()*height, length);


    	x++;
    }

}

function xThread(x, y, l){
	ctx.save();
	ctx.translate(x-(0.5*l), y);
	ctx.beginPath();
	ctx.lineTo(l, 0);
	ctx.lineTo(0,0)
	ctx.stroke();
	ctx.restore();
}

function yThread(x, y, l){
	ctx.save();
	ctx.translate(x, y-(0.5*l));
	ctx.beginPath();
	ctx.lineTo(0, l);
	ctx.lineTo(0,0)
	ctx.stroke();
	ctx.restore();
}

drawLines("rgba(47,47,47,.5)", "rgba(57,57,57,.5)", "rgba(16,16,16,.5)", "rgba(34,34,34, 1.0)", 500, 8, 1); // grab settings from canvas.daniel-letson.com/tweed

});