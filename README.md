# WordPress jQuery REST API Wrapper

> Experimental Project: Provides a simple way of using the WordPress REST API via jQuery.

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

### Example for Getting Posts
```
$('.app').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
});
```

### Example for Getting a Single Post (Hello World)
```
$('.app').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	endPoint: 'posts/',
	postID: '1'
});
```

### Example for Getting Products (WooCommerce)
```
$('.store').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	wpSystem: 'wc/',
	apiVersion: 'v1/',
	endPoint: 'products',
});
```

### Example for Getting a Single Product (WooCommerce)
```
$('.store').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
	wpSystem: 'wc/',
	apiVersion: 'v1/',
	endPoint: 'products/',
	postID: '123',
});
```
