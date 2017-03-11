(function ( $ ) {

	$.fn.wprestapi = function( options ) {
		var settings = $.extend({
			// These are the default settings.

			siteUrl: '',
			userName: '',
			passWord: '',
			securityCheck: '',
			wpSystem: 'wp/',
			apiVersion: 'v2/',
			endPoint: 'posts', // Default: Posts
			postID: '', // Default: Blank - Used for updating or deleting a post.
			postData: '{}', // Default: Blank
			formMethod: 'GET', // Default: GET. Can use POST for posting data.
		}, options );

		$.ajax({
			url: settings.siteUrl + "/wp-json/" + settings.wpSystem + settings.apiVersion + settings.endPoint + settings.postID,
			method: settings.formMethod,
			contentType: "application/json",
			crossDomain: true,
			data: settings.postData,
			beforeSend: function ( xhr ) {
				xhr.setRequestHeader( 'X-WP-Nonce', settings.securityCheck ),
				xhr.setRequestHeader( 'Authorization', 
					'Basic ' + btoa( settings.userName + ':' + settings.passWord )
				);
			},
			success: function( data, txtStatus, xhr ) {
				return data;
			},
			error: function( data ) {
				console.log(data);
			},
			dataType: 'json'
		});

		return this;
	};

}( jQuery ));
