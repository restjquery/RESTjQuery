var response = null;

var restjQuery = function( options ) {
	'use strict';

	var hostName = window.location.hostname; // Returns current host name only.

	var protocol = window.location.protocol; // Returns the protocol used. i.e file: or http: or https:

	// These are the default settings.
	var settings = $.extend({
		siteUrl: hostName, // Default is the current host name. Only set if connecting with another site.
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

	if ( settings.siteUrl == '' && protocol == 'file:' ) {
		console.error('WP REST API jQuery Error: Script can not run as a file.');
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

	console.log('Requested Endpoint: ' + settings.siteUrl + "/wp-json/" + settings.wpSystem + settings.apiVersion + settings.endPoint + settings.postID + pagination );

	if ( settings.endPoint !== 'media' ) {

		$.ajax({
			async: false,
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
			complete: function( data, status, xhr ) {
				response = data;
			},
			error: function( data, status, xhr ) {
				response = data;
			},
			dataType: settings.dataType
		});

		return response;

	}
	else {
		console.error('WP REST API jQuery Error: Uploading Media is not yet supported!');
		response = 'Not ready!';
		return response;
	}

};
