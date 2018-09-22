# WordPress REST API jQuery

[![License](https://img.shields.io/badge/license-GPL--3.0%2B-red.svg)](https://github.com/seb86/WordPress-REST-API-jQuery/blob/master/LICENSE.md)
[![GitHub forks](https://img.shields.io/github/forks/seb86/WordPress-REST-API-jQuery.svg?style=flat)](https://github.com/seb86/WordPress-REST-API-jQuery/network)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=RESTjQuery%20is%20a%20lightweight%20jQuery%20script%20for%20handling%20REST%20API%20requests%20from%20WordPress.%20—&url=https://restjquery.com&via=sebd86&hashtags=WordPress,RESTjQuery)

A lightweight jQuery script for handerling REST API requests.

###### Follow us
💻 [Website](https://restjquery.com) 🐦[Twitter](https://twitter.com/sebd86)


## Overview 🔔

This project was created to save time writing more lines of code just to get the returned REST API response via jQuery. Perfect for keeping your own code to a minimum rather than repeating yourself.

Perfect for building apps.

<!--If you need help with the script or want to join a community of developers who use the script you can join the Slack channel after paying a fee in your choice of currency. Simply visit [https://restjquery.com](https://restjquery.com) and select **"I would like some support"** and pay.

You will then be invited to the Slack team. Once you have created an account you can ask for help directly or talk with the rest of the community.

If you just want to show some appreciation for the project you can do that too.-->


### Is This Free?

Yes, it's free. But here's what you should _really_ care about:

* It's lightweight. Only 3.04 KB


### What's the Catch?

This is a non-commercial project. As such:

* Development time for it is effectively being donated and is therefore, limited.
* Critical issues may not be resolved promptly.

<!--If you:

* have a customization/integration requirement, or
* want to see another feature added, e.g. support for **eggs** or **donuts**,

...then I'd love to [hear from you](https://sebastiendumont.com/about/)!-->

Please understand that this repository is not a place to seek help with configuration-related issues. Use it to report bugs, propose improvements, or discuss new features.

## Guide 📘

#### Documentation 📖

* [Documentation](https://docs.restjquery.com/)
* [Examples](https://github.com/seb86/WordPress-REST-API-jQuery-Examples)


#### Requirements ✅

To use this project you will need:

* WordPress v4.4+


#### Installation 💽

If you want to use the script within your WordPress site:

1. Go to WordPress Admin > Plugins > Add New.
2. Search for [WordPress REST API jQuery Support](https://wordpress.org/plugins/wp-rest-api-jquery-support/).
3. Click Install Now and Activate the plugin.

... or if you wish to use the script in an app while keeping WordPress safe and secure elsewhere:

1. Download the latest release from this Git repository.
2. Copy `wp-rest-api-jquery.min.js` from `dist` folder to your app lib folder.
3. Apply the script either to the header or footer of your app.

```
<script src="https://yourdomain.***/lib/wp-rest-api-jquery.min.js"></script>
```


### Usage

Make sure that when you use the script in your app that you set the `site_url` to the location of WordPress. Otherwise it is NOT required!

```
var posts = restjQuery(
  site_url: "https://wordpress.location"
);
```


## Support ⭐

WordPress REST API jQuery is released freely and openly. Feedback or ideas and approaches to solving limitations in WordPress REST API jQuery is greatly appreciated.

At present I **do not offer a dedicated, premium support channel** for WordPress REST API jQuery. Please understand this is a non-commercial project. As such:

* Development time for it is effectively being donated and is therefore, limited.
* Support inquiries may not be answered in a timely manner.
* Critical issues may not be resolved promptly.

#### Reporting Issues 📝

If you think you have found a bug in the project, a problem with the documentation, or want to see a new feature added, please [open a new issue](https://github.com/seb86/WordPress-REST-API-jQuery/issues/new) and I will do my best to help you out.


## Contribute

If you or your company use WordPress REST API jQuery or appreciate the work I’m doing in open source, please consider supporting me directly so I can continue maintaining it and keep evolving the project. It's pretty clear that software actually costs something, and even though it may be offered freely, somebody is paying the cost.

You'll be helping to ensure I can spend the time not just fixing bugs, adding features, releasing new versions, but also keeping the project afloat. Any contribution you make is a big help and is greatly appreciated.

Please also consider starring ✨ and sharing 👍 the repo! This helps the project getting known and grow with the community. 🙏

If you want to do a one-time donation, you can donate to:
- [My PayPal](https://www.paypal.me/codebreaker)
- [BuyMeACoffee.com](https://www.buymeacoffee.com/sebastien)

<!--
Need to work on how to support monthly donations. Once I have figured it out, share details here.
-->
If you have special requirements for a sponsorship, you can email me and we can talk.

<!--
Uncomment this part once the project has a least one supporter.
[See all my amazing supports](#supporters) 🌟
-->

If you would like to contribute code to this project then please follow these [contribution guidelines](https://github.com/seb86/WordPress-REST-API-jQuery/blob/master/contributing.md).

Thank you for your support! 🙌


<!--## Supporters

> No supporters yet! 🔒-->


## Development 💻

1. Clone the GitHub repository: https://github.com/seb86/WordPress-REST-API-jQuery.git
2. Browse to the folder in the command line.
3. Run the `npm install --only=dev` command to install the development dependencies within a /node_modules/ folder.
4. Run the `grunt test` command to check for any JS errors.
5. Run the `grunt build` command for minifying the script ready for distribution.
6. Run the `grunt zip` command to generate a release zipped up.


---


##### License

WordPress REST API jQuery is released under [GNU General Public License v3.0](http://www.gnu.org/licenses/gpl-3.0.html).


##### Credits

WordPress REST API jQuery is developed and maintained by [Sébastien Dumont](https://sebastiendumont.com/about/).

---

<p align="center">
	<img src="https://raw.githubusercontent.com/seb86/my-open-source-readme-template/master/a-sebastien-dumont-production.png" width="353">
</p>

