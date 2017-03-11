# WordPress jQuery REST API Wrapper

> Experimental Project: Provides a simple way of using the WordPress REST API via jQuery.

## Default Settings

* siteUrl - **Must be set**.
* userName - **Only set if authorization is needed.**
* passWord - **Only used if authorization is needed.**
* securityCheck - **Must be set.**
* wpSystem - Default is **wp/** for WordPress. For WooCommerce, set it to **wc/**
* apiVersion **v2/**
* endPoint - **posts**
* postID - **Set Post ID for updating or deleting a specific post.**
* postData - **{}**
* formMethod - **GET** - Use **POST** for posting data.

### Example for Getting Posts
```
$('.app').wprestapi({
	siteUrl: "https://wc-rest-testing.dev",
});
```
