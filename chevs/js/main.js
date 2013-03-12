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
    color: "#111111",
    clickoutFiresChange: true,
    showInput: true,
    showAlpha: true,
    preferredFormat: "rgb",
    showButtons: false
    });
$("#color2").spectrum({
    color: "#000000",
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



$('#shape_size').val(50);
$('#spacingX').val(0);
$('#spacingY').val(0);
$('#ratio').val(50);
$('#background_color').spectrum('set', '#222222');
$('#color1').spectrum('set', '#111111');
$('#color2').spectrum('set', '#000000');

$('#update').click(function(){  
	var width = $(window).width();
	var height = $(window).height();
    var color1 = $('#color1').spectrum('get').toRgbString();
    var color2 = $('#color2').spectrum('get').toRgbString();
    var bg_color = $('#background_color').spectrum('get').toRgbString();
    var shape_size = $('#shape_size').val();
    var ratio = $('#ratio').val();
    var spaceX = $('#spacingX').val();
    var spaceY = $('#spacingY').val();

ctx.clearRect(0,0,width,height);
drawShapes(color1, color2, bg_color, shape_size, ratio, spaceX, spaceY);

var outputString = "'"+color1+"', '"+color2+"', '"+bg_color+"', "+shape_size+", "+ratio+", "+spaceX+", "+spaceY;
$('.settings_output').html("("+outputString+")");

});



var canvas = $("#c")[0];

canvas.width = $(window).width();
canvas.height = $(window).height();

var ctx = canvas.getContext("2d");


function drawShapes(color1, color2, bg_color, size, ratio, spacingX, spacingY){
	width = $(canvas).width();
	height = $(canvas).height();
	var x=0;
	var y=0;
	var colorFactor = 0;
	var ratioDec = ratio/100;
	ctx.fillStyle = bg_color;
	ctx.fillRect(0,0,width, height);

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

drawShapes('rgb(17, 17, 17)', 'rgb(0, 0, 0)', 'rgb(34, 34, 34)', 50, 50, 0, 0);


$(window).resize(function(){
	canvas.width = $(window).width();
	canvas.height = $(window).height();
});

});




