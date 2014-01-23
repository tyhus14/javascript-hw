


$('.box').hover(function(){
	console.log('the button clicked');

	$(this).addClass('active');
});


$( "h1" ).click(function() {
  $(this).slideUp();
});


$('.box-three').click(function(){
	console.log('the button clicked');

	$(this).addClass('active');
});


$('.box-four').dblclick(function(){
	console.log('the button double clicked');

	$(this).addClass('active');
});

$('.box-five').click(function(){
	console.log('the button clicked');

	$(this).fadeOut('active');
});

$('.box-six').hover(function(){
	console.log('the button hovered');

	$(this).addClass('larger');
});


$('.box-seven').click(function(){
	console.log('the button clicked');

	$('.minibox').addClass('appear');
});

$('.box-eight').click(function(){
	console.log('the button clicked');

	$(this).addClass('largerspin');
});



$('.ball').click(function(){
	console.log('the button clicked');

	$(this).addClass('falling');

	$('.bar').addClass('spin');

	$('.ball-two').addClass('fly');
});

$('.stick').click(function(){
	console.log('the button clicked');

	$(this).addClass('move');

	$('.cueball').addClass('active');

	$('.eightball').addClass('next', 'away');

	$('.pooltable span').addClass('change');

});

$('.write').focus(function(){
	$(this).css('background-color', 'red');

});

$('.write').blur(function(){
	$(this).css('background-color', 'white');
});

$('.rectangle').click(function(){
	$('.toggle').trigger('focus');
});

$('.box-ten').click(function(){
	$(this).append("<span> More Text Added! </span>");
});

$('.box-eleven').mouseleave(function(){
	console.log('mouse left');
	$(this).removeClass('gone');
});

$('.box-twelve').click(function(){
	console.log('the button clicked');
	$(this).addClass('active');
});

$('.buttonlever').hover(function(){
	console.log('the button hovered');
	$('.box-thirteen').addClass('active');
});

$('.box-fourteen').click(function(){
	console.log('the button clicked');
	$(this).toggleClass('active');
});

$('.box-fifteen').hover(function(){
	console.log('the button clicked');
	$(this).toggleClass('active');
});

$('.box-sixteen').click(function(){
	console.log('the button clicked');
	$(this).toggleClass('active');
});

$('.box-seventeen').hover(function(){
	console.log('the button hovered');
	$(this).toggleClass('active');
});

$('.box-eighteen').click(function(){
	console.log('the button clicked');
	$(this).toggleClass('active');
});

$('.box-nineteen').click(function(){
	console.log('the button clicked');
	
	$(this).addClass('active');
	$('.littlebox').addClass('active');
});

$('.box-twentyone').click(function(){
	console.log('the button clicked');
	
	$(this).addClass('active');
});

$('.box-twenty').click(function() {
  $(this).slideUp();
});