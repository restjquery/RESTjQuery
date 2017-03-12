(function ( $ ) {

	$.fn.wprestapi = function( options ) {
		'use strict';

		var settings = $.extend({
			// These are the default settings.
			siteUrl: '', // Default: Blank - Must be set.
			userName: '', // Only set if authorization is needed.
			passWord: '', // Only set if authorization is needed.
			securityCheck: '', // Must be set so logged in users can access authorized requests.
			wpSystem: 'wp/', // Default is wp/ for WordPress. For WooCommerce, set it to wc/
			apiVersion: 'v2/',
			endPoint: 'posts', // Default: Posts
			postID: '', // Default: Blank - Set Post ID for updating or deleting a specific post.
			postData: '{}', // Default: Empty JSON
			formMethod: 'GET', // Default: GET. Can use POST for posting data.
			dataType: 'json', // Default: json - For cross domain support, set as jsonp
		}, options );

		// Checks that the site url was set before proceeding.
		if ( settings.siteUrl == '' ) {
			console.error('WP REST API jQuery Error: The site url was not set!');
			return false;
		}

		// Checks that the REST API is identified.
		if ( settings.wpSystem == '' ) {
			console.error('WP REST API jQuery Error: REST API is unknown!');
			return false;
		}

		// Checks that the REST API version is identified.
		if ( settings.apiVersion == '' ) {
			console.error('WP REST API jQuery Error: REST API version is unknown!');
			return false;
		}

		// Checks that the endpoint is defined.
		if ( settings.endPoint == '' ) {
			console.error('WP REST API jQuery Error: Endpoint was not defined!');
			return false;
		}

		// Checks that the AJAX method is not empty.
		if ( settings.formMethod == '' ) {
			console.error('WP REST API jQuery Error: Ajax method was not set!');
			return false;
		}

		// Checks if we are posting data and post data is not empty.
		if ( settings.formMethod !== 'GET' && settings.postData == '{}' ) {
			console.error('WP REST API jQuery Error: Post data is empty!');
			return false;
		}

		return this.each(function() {

			$.ajax({
				url: settings.siteUrl + "/wp-json/" + settings.wpSystem + settings.apiVersion + settings.endPoint + settings.postID,
				method: settings.formMethod,
				contentType: "application/json",
				crossDomain: true,
				crossOrigin: true,
				data: settings.postData,
				beforeSend: function ( xhr ) {
					xhr.setRequestHeader( 'X-WP-Nonce', settings.securityCheck ),
					xhr.setRequestHeader( 'Authorization', 
						'Basic ' + btoa( settings.userName + ':' + settings.passWord )
					);
				},
				success: function( data, status, xhr ) {
					//console.log(data);
					return data;
				},
				error: function( data, status, xhr ) {
					console.error('WP REST API jQuery Error: Response = ' + xhr );
				},
				dataType: settings.dataType
			})
			.done(function( responseData, status, xhr ) {
				return responseData;
			});

			return this;
		});

	};

}( jQuery ));
