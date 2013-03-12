$(document).ready(function(){

$('.hider').toggle(function(){
    console.log('hide');
    $(this).html('show options');
    $('.properties').slideUp();

}, function(){
    console.log('show');
    $(this).html('hide options');
    $('.properties').slideDown();
});

$("#color1").spectrum({
    color: "#777777",
    clickoutFiresChange: true,
    showInput: true,
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#color2").spectrum({
    color: "#444444",
    clickoutFiresChange: true,
    showInput: true,
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#color3").spectrum({
    color: "#222222",
    clickoutFiresChange: true,
    showInput: true, 
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#background_color").spectrum({
    color: "rgba(34,34,34,.5)",
    clickoutFiresChange: true,
    showInput: true, 
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });

$('#stroke_weight').val(1);
$('#line_length').val(500);
$('#density').val(80);
$('#background_color').spectrum('set', "rgba(34,34,34, 1.0)");
$('#color1').spectrum('set', 'rgba(47,47,47,.5)');
$('#color2').spectrum('set', "rgba(57,57,57,.5)");
$("#color3").spectrum('set', "rgba(16,16,16,.5)");

$('#update').click(function(){  
	var width = $(window).width();
	var height = $(window).height();
    var color1 = $('#color1').spectrum('get').toRgbString();
    var color2 = $('#color2').spectrum('get').toRgbString();
    var bg_color = $('#background_color').spectrum('get').toRgbString();
    var color3 = $('#color3').spectrum('get').toRgbString();
    var line_length = $('#line_length').val();
    var density = $('#density').val();
    var stroke_weight = $('#stroke_weight').val();
    var factor = 0;
	var x = 0;
	var y = 0;
	var gridX = 0;
	var gridY = 0;
	
ctx.clearRect(0,0,width,height);
drawLines(color1, color2, color3, bg_color, line_length, density, stroke_weight);

var outputString = "'"+color1+"', '"+color2+"', '"+color3+"', '"+bg_color+"', "+line_length+", "+density+", "+stroke_weight;
$('.settings_output').html("("+outputString+")");

});

var canvas = $("#c")[0];

canvas.width = $(window).width();
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

drawLines("rgba(47,47,47,.5)", "rgba(57,57,57,.5)", "rgba(16,16,16,.5)", "rgba(34,34,34, 1.0)", 500, 80, 1);

$(window).resize(function(){

    canvas.width = $(window).width();
    canvas.height = $(window).height();
});

});




