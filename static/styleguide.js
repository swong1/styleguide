var styleguide = { // eslint-disable-line no-unused-vars
	onIframeLoad: function( iframe ) {
		iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
	},
	showTab: function( tabEl, id ) {
		var context = tabEl.parentElement.parentElement;
		var tabs = context.querySelectorAll( '[data-tab-toggle]' );
		var tabContents = context.querySelectorAll( '[data-tab-id]' );

		tabs.forEach( function( t ) {
			t.classList.remove( 'active' );
		} );

		tabEl.classList.add( 'active' );

		tabContents.forEach( function( t ) {
			if ( t.getAttribute( 'data-tab-id' ) === id ) {
				t.classList.add( 'active' );
			} else {
				t.classList.remove( 'active' );
			}
		} );
	}
};