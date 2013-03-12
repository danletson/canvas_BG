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

$("#grid_color").spectrum({
    color: "#777777",
    clickoutFiresChange: true,
    showInput: true,
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#shape_color").spectrum({
    color: "#444444",
    clickoutFiresChange: true,
    showInput: true,
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#background_color").spectrum({
    color: "#222222",
    clickoutFiresChange: true,
    showInput: true, 
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#shadow_color").spectrum({
    color: "rgba(34,34,34,.5)",
    clickoutFiresChange: true,
    showInput: true, 
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });

$('#stroke_weight').val(1);
$('#stroke_weight2').val(1);
$('#shape_size').val(50);
$('#spacing').val(300);
$('#grid_spacing').val(100);
$('#background_color').spectrum('set', '#222222');
$('#shape_color').spectrum('set', '#777777');
$('#grid_color').spectrum('set', '#444444');
$("#shadow_color").spectrum('set', 'rgba(0,0,0,0.8)');

$('#update').click(function(){  
	var width = $(window).width();
	var height = $(window).height();
    var shape_color = $('#shape_color').spectrum('get').toRgbString();
    var grid_color = $('#grid_color').spectrum('get').toRgbString();
    var bg_color = $('#background_color').spectrum('get').toRgbString();
    var shadow_color = $('#shadow_color').spectrum('get').toRgbString();
    var shape_size = $('#shape_size').val();
    var space = $('#spacing').val();
    var grid_space = $('#grid_spacing').val();
    var stroke_weight = $('#stroke_weight').val();
    var stroke_weight2 = $('#stroke_weight2').val();
    var factor = 0;
	var x = 0;
	var y = 0;
	var gridX = 0;
	var gridY = 0;

ctx.clearRect(0,0,width,height);
drawShapes(space, grid_space, shape_size, shape_color, grid_color, shadow_color, bg_color, stroke_weight, stroke_weight2);

var outputString = space+", "+grid_space+", "+shape_size+", '"+shape_color+"', '"+grid_color+"', '"+shadow_color+"', '"+bg_color+"', "+stroke_weight+", "+stroke_weight2;
$('.settings_output').html("("+outputString+")");

});

var canvas = $("#c")[0];

canvas.width = $(window).width();
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
	ctx.fillStyle = "none"

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

drawShapes(300, 100, 50, "rgba(119,119,119,1.0)", "rgb(68,68,68)", "rgba(0,0,0,0.8)", "rgba(34,34,34,1.0)", 1, 1);

$(window).resize(function(){

	canvas.width = $(window).width();
	canvas.height = $(window).height();
});

});




