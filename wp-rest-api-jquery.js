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
			mediaFile: '', // Default: Empty
			formMethod: 'GET', // Default: GET. Can use POST for posting data.
			dataType: 'json', // Default: json - For cross-domain support, set as jsonp
			cache: true, // Default: true - If dataType is set as jsonp then this will automatically set to false.
			pageNumber: 0, // Default: 0 - Specify the page of results to return.
			perPage: 0, // Default: 0 - Specify the number of records to return in one request.
			offSet: 0, // Default: 0 - Specify an arbitrary offset at which to start retrieving posts.
		}, options );

		// Checks that the site url was set before proceeding.
		if ( settings.siteUrl == '' ) {
			console.error('WP REST API jQuery Error: The site url was not set!');
			return false;
		}

		// Checks if a password was entered if username is not empty.
		if ( settings.userName !== '' && settings.passWord == '' ) {
			console.error('WP REST API jQuery Error: Password for authorization is missing!');
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

		// Set cache to false if dataType is set to jsonp.
		if ( settings.dataType == 'jsonp' ) {
			settings.cache = false;
		}

		// Prepares the pagination to apply at the end of the url request.
		var pagination = '';

		if ( settings.perPage > 0 && settings.pageNumber > 0 ) {
			pagination = '?per_page=' + settings.perPage + '&page=' + settings.pageNumber;
		}
		else if ( settings.perPage > 0 && settings.offSet > 0 ) {
			pagination = '?per_page=' + settings.perPage + '&page=' + settings.offSet;
		}
		else if ( settings.perPage > 0 ) {
			pagination = '?per_page=' + settings.perPage;
		}

		return this.each(function() {

			if ( settings.endPoint !== 'media' ) {

				$.ajax({
					url: settings.siteUrl + "/wp-json/" + settings.wpSystem + settings.apiVersion + settings.endPoint + settings.postID + pagination,
					method: settings.formMethod,
					cache: settings.cache,
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
				.done( function( responseData, status, xhr ) {
					return responseData;
				});

			}
			else {
				console.error('WP REST API jQuery Error: Uploading Media is not yet supported!');
			}

			return this;
		});

	};

}( jQuery ));
