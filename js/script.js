$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).addClass( 'active' );
});

