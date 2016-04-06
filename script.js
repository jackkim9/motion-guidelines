$(document).ready(function(){
	$('#toggle-error').on('click', function(){
	  $('.notification-bar')
	    .removeClass('success')
	    .addClass('active error')
	  ;
	  
	  setTimeout(function(){
	    $('.notification-bar').removeClass('active');
	  }, 3500);
	});
});

