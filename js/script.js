$(document).ready(function(){
	$( '#topheader .navbar-nav a' ).on( 'click', function (event) {
		$( '#topheader .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
	});

	$("#topheader .navbar-nav a").on('click', function(event) {
	  console.log(this.hash);
	  if (this.hash !== "") {
		event.preventDefault();
  
		var hash = this.hash;
  
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		window.location.hash = hash;
		});
	  }
	});
  });
