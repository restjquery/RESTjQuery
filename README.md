# WordPress jQuery REST API Wrapper

An experimental project that provides a simple way of using the WordPress REST API via jQuery.

> This project is in an alpha status. The project is not complete.

## Default Settings

* siteUrl - **Must be set**.
* userName - **Only set if authorization is needed.**
* passWord - **Only used if authorization is needed.**
* securityCheck - **Must be set so logged in users can access authorized requests.**
* wpSystem - Default is **wp/** for WordPress. For WooCommerce, set it to **wc/**
* apiVersion - **v2/**
* endPoint - **posts** - Add a forward slash at the end when specifiying a post. **e.g. posts/**
* postID - **Set Post ID for updating or deleting a specific post.**
* postData - **{}**
* formMethod - **GET** - Use **POST** for posting data.
* dataType - **json** - Use **jsonp** for cross-domain support.
* pageNumber - **0** - Specify the page of results to return.
* perPage - **0** - Specify the number of records to return in one request.
* offSet - **0** - Specify an arbitrary offset at which to start retrieving posts.


### Example for Getting Posts
```JavaScript
$('.app').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
});
```

### Example for Getting a Single Post (Hello World)
```JavaScript
$('.app').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	endPoint: 'posts/',
	postID: '1'
});
```

### Example for Updating a Single Post
```JavaScript
$('.app').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	endPoint: 'posts/',
	postID: '1',
	postData: {"title":"Go Away... Im Resting"},
	formMethod: 'POST'
});
```

### Example for Getting Products (WooCommerce)
```JavaScript
$('.store').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	wpSystem: 'wc/',
	apiVersion: 'v1/',
	endPoint: 'products',
});
```

### Example for Getting a Single Product (WooCommerce)
```JavaScript
$('.store').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	wpSystem: 'wc/',
	apiVersion: 'v1/',
	endPoint: 'products/',
	postID: '123',
});
```
