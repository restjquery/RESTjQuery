var response = null;

var restjQuery = function( options ) {
	'use strict';

	var version = "1.0";

	var hostName = window.location.hostname; // Returns current host name only.

	var protocol = window.location.protocol; // Returns the protocol used. i.e file: or http: or https:

	// These are the default settings.
	var settings = $.extend({
		site_url: protocol + "//" + hostName, // Default is the current host name. Only set if connecting with another site.
		authorization: {
			authorized_method: null,
			username: null,
			password: null,
			token: {
				access_token: null,
				consumer_key: null,
				consumer_secret: null
			}
		},
		nonce: null, // Must be set so logged in users can access authorized requests.
		namespace: 'wp/v2/', // Default is wp/v2/ for WordPress. For WooCommerce, set it to wc/v1/
		endpoint: 'posts', // Default: Posts
		postData: '{}', // Default: Empty JSON
		filename: '', // Default: Empty - Used to specify the filename that the media file will be called.
		formMethod: 'GET', // Default: GET. Can use POST for posting data.
		dataType: 'json', // Default: json - For cross-domain support, set as jsonp
		cache: true, // Default: true - If dataType is set as jsonp then this will automatically set to false.
	}, options );

	if ( settings.site_url == '' && protocol == 'file:' ) {
		console.error('WP REST API jQuery Error: Script can not run as a file.');
		return false;
	}

	if ( settings.authorization.authorized_method !== null ) {
		console.error('WP REST API jQuery Error: Authorization method was not specified.');
		return false;
	}

	// Checks if a password was entered if username is not empty.
	if ( settings.authorization.username !== '' && settings.authorization.password == '' ) {
		console.error('WP REST API jQuery Error: Password for authorization is missing!');
		return false;
	}

	// Checks that the namespace is identified.
	if ( settings.namespace == '' ) {
		console.error('WP REST API jQuery Error: Namespace is unknown!');
		return false;
	}

	// Checks that the endpoint is defined.
	if ( settings.endpoint == '' ) {
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

	// Check if the request requires authentication. False by default.
	var auth_headers = false;
	if ( settings.nonce !== null || settings.authorization.authorized_method !== null ) {
		auth_headers = true;
	}

	console.log('Requested Endpoint: ' + settings.site_url + "/wp-json/" + settings.namespace + settings.endpoint );

	var standard_request = true;

	// Checks that we are posting data for uploading media files.
	if ( settings.endpoint == 'media' && settings.formMethod == 'POST' ) {
		standard_request = false;
	}

	if ( standard_request ) {
		response = restRequest( settings );
	}
	else {
		response = restUploadMedia( settings );
	}

	return response;

	/**
	 * This runs the REST API request. Passes the settings variable.
	 */
	function restRequest( settings ) {

		// If authorization is requested then we set the appropriate headers.
		if ( auth_headers ) {

			console.log('WP REST API jQuery Authenticating Request...');

			$.ajax({
				async: false,
				url: settings.site_url + "/wp-json/" + settings.namespace + settings.endpoint,
				method: settings.formMethod,
				cache: settings.cache,
				crossDomain: true,
				crossOrigin: true,
				data: settings.postData,
				beforeSend: function ( xhr ) {
					setHeaders( settings, xhr );
				},
				complete: function( newData ) {
					jQuery('body').trigger('restjquery_complete_' + settings.formMethod + '_' + settings.endpoint, [newData]);

					response = newData.responseJSON;
				},
				error: function( error ) {
					jQuery('body').trigger('restjquery_error_' + settings.formMethod + '_' + settings.endpoint, [error]);

					response = error;
				},
				dataType: settings.dataType
			});

		}
		else {

			$.ajax({
				async: false,
				url: settings.site_url + "/wp-json/" + settings.namespace + settings.endpoint,
				method: settings.formMethod,
				cache: settings.cache,
				contentType: "application/json",
				crossDomain: true,
				crossOrigin: true,
				data: settings.postData,
				complete: function( newData ) {
					jQuery('body').trigger('restjquery_complete_' + settings.formMethod + '_' + settings.endpoint, [newData]);

					response = newData.responseJSON;
				},
				error: function( error ) {
					jQuery('body').trigger('restjquery_error_' + settings.formMethod + '_' + settings.endpoint, [error]);

					response = error;
				},
				dataType: settings.dataType
			});

		}

		return response;
	}

	function restUploadMedia( settings ) {

		$.ajax({
			async: true,
			url: settings.site_url + "/wp-json/" + settings.namespace + "media",
			method: 'POST',
			data: settings.postData,
			cache: false,
			contentType: false,
			processData: false,
			headers: { 'Content-Disposition': 'attachment;filename=' + settings.filename },
			beforeSend: function ( xhr ) {
				setHeaders( settings, xhr );
			},
			complete: function( newData ) {
				response = newData;
				console.log(response);

				if ( newData.status == '200' ) {
					console.log('Upload Done');
				}
				else {
					console.error('Upload failed!');
				}
			},
			error: function( error ) {
				response = error;
			},
		});

		return response;
	}

	/**
	 * Sets the required request headers.
	 */
	function setHeaders( settings, xhr ) {
		if ( settings.nonce !== null ) {
			xhr.setRequestHeader( 'X-WP-Nonce', settings.nonce );
		}

		var authorized_method = settings.authorization.authorized_method;

		if ( authorized_method == 'basic' || authorized_method == 'consumer' ) {
			xhr.setRequestHeader( 'Authorization', 'Basic ' + btoa( settings.authorization.username + ':' + settings.authorization.password ) );
		}

		return xhr;
	}

};
