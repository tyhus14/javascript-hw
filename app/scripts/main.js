


$('.box').hover(function(){
	console.log('the button clicked');

	$(this).addClass('active');

	$('.box-three').addClass('visible');
});


$( "h1" ).click(function() {
  $( this ).slideUp();
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

	$('.eightball').addClass('next');

	$('.eightball').addClass('gone');



});