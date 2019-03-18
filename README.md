# RESTjQuery

![GitHub Release Date](https://img.shields.io/github/release-date/restjquery/RESTjQuery.svg?color=%2355196f&style=for-the-badge)
[![License](https://img.shields.io/badge/license-GPL--3.0%2B-red.svg?style=for-the-badge)](https://github.com/restjquery/RESTjQuery/blob/master/LICENSE.md)
[![GitHub forks](https://img.shields.io/github/forks/seb86/WordPress-REST-API-jQuery.svg?style=for-the-badge)](https://github.com/restjquery/RESTjQuery/network)

Handle REST-API requests from or to your WordPress site using jQuery.

###### Follow me
💻 [Website](https://sebastiendumont.com) 🐦[Twitter](https://twitter.com/sebd86)


## 🔔 Overview

This project was created to save time writing more lines of code just to get the returned REST API response via jQuery. Perfect for keeping your own code to a minimum rather than repeating yourself.

Perfect for building web apps.


### Is This Free?

Yes, it's free. But here's what you should _really_ care about:

* It's lightweight. ![GitHub file size in bytes](https://img.shields.io/github/size/restjquery/RESTjQuery/dist/restjquery.min.js.svg?style=flat-square)


Please understand that this repository is not a place to seek help with configuration-related issues. Use it to report bugs, propose improvements, or discuss new features.


## 📘 Guide

#### 📖 Documentation

* [Documentation](https://docs.restjquery.com/)
* [Examples](https://github.com/restjquery/examples)


#### ✅ Requirements

To use this project you will need:

* WordPress v4.4 minimum


#### 💽 Installation

If you want to use the script within your WordPress site:

1. Go to WordPress Admin > Plugins > Add New.
2. Search for [RESTjQuery](https://wordpress.org/plugins/wp-rest-api-jquery-support/).
3. Click Install Now and Activate the plugin.

... or if you wish to use the script in an app while keeping WordPress safe and secure elsewhere:

1. Download the latest release from this Git repository.
2. Copy `restjquery.min.js` from `dist` folder to your app lib folder.
3. Apply the script either to the head or just before your close body tag of your web app.

```javascript
<script src="https://yourdomain.***/lib/restjquery.min.js"></script>
```

or you can use the latest version directly from restjquery.com

```javascript
<script src="https://restjquery.com/release/latest/restjquery.min.js"></script>
```

### Usage

Make sure that when you use the script in your app that you set the `site_url` to the location of the WordPress site. Otherwise it is NOT required!

```javascript
var posts = restjQuery(
  site_url: "https://wordpress.location"
);
```


## ⭐ Support

RESTjQuery is released freely and openly. Feedback or ideas and approaches to solving limitations in RESTjQuery is greatly appreciated.

At present I **do not offer a dedicated, premium support channel** for RESTjQuery. Please understand this is a non-commercial project. As such:

* Development time for it is effectively being donated and is therefore, limited.
* Support inquiries may not be answered in a timely manner.
* Critical issues may not be resolved promptly.


#### 📝 Reporting Issues

If you think you have found a bug in the project, a problem with the documentation, or want to see a new feature added, please [open a new issue](https://github.com/restjquery/RESTjQuery/issues/new) and I will do my best to help you out.


## Contribute

If you or your company use RESTjQuery or appreciate the work I’m doing in open source, please consider supporting me directly so I can continue maintaining it and keep evolving the project.

You'll be helping to ensure I can spend the time not just fixing bugs, adding features or releasing new versions but also keeping the project afloat. Any contribution you make is a big help and is greatly appreciated.

Please also consider starring ✨ and sharing 👍 the project repository! This helps the project getting known and grow with the community. 🙏

I accept one-time donations and monthly via [BuyMeACoffee.com](https://www.buymeacoffee.com/sebastien)
- [My PayPal](https://www.paypal.me/codebreaker)
- [BuyMeACoffee.com](https://www.buymeacoffee.com/sebastien)
- Bitcoin (BTC): `3L4cU7VJsXBFckstfJdP2moaNhTHzVDkKQ`
- Ethereum (ETH): `0xc6a3C18cf11f5307bFa11F8BCBD51F355b6431cB`
- Litecoin (LTC): `MNNy3xBK8sM8t1YUA2iAwdi9wRvZp9yRoi`

If you have special requirements for a sponsorship, you can email me and we can talk.

If you would like to contribute code to this project then please follow these [contribution guidelines](https://github.com/restjquery/RESTjQuery/blob/master/contributing.md).

Thank you for your support! 🙌


## 💻 Development

1. Clone the GitHub repository: https://github.com/restjquery/RESTjQuery.git
2. Browse to the folder in the command line.
3. Run the `npm install --only=dev` command to install the development dependencies within a /node_modules/ folder.
4. Run the `grunt test` command to check for any JS errors.
5. Run the `grunt build` command for minifying the script ready for distribution.
6. Run the `grunt zip` command to generate a release zipped up.


---


##### License

RESTjQuery is released under [GNU General Public License v3.0](http://www.gnu.org/licenses/gpl-3.0.html).


##### Credits

RESTjQuery is developed and maintained by [Sébastien Dumont](https://sebastiendumont.com/about/).

---

<p align="center">
	<img src="https://raw.githubusercontent.com/seb86/my-open-source-readme-template/master/a-sebastien-dumont-production.png" width="353">
</p>

