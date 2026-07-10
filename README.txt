=== Dekode Fundraising ===
Tags: fundraising, donations, forms
Requires at least: 6.4
Requires PHP: 8.1
Tested up to: 6.8
Stable tag: 2.5.0
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

The official WordPress plugin for Fundy, the fundraising platform built with, and for, Scandinavia's largest charities.

== Description ==

Dekode Fundraising connects your WordPress site to [Fundy](https://fundy.cloud), the fundraising platform built with, and for, Scandinavia's largest charities. Place a donation form anywhere on your site; Fundy handles payments, receipts and CRM sync behind the scenes.

= Made for WordPress =
Add forms with the Dekode Fundraising block or the `[fundy_form]` shortcode, in the block editor, the classic editor or your page builder. Includes a donation receipt block and site and multisite settings. Set up a form in under a minute, no developers needed.

= Built with fundraisers, built to convert =
Fundy is co-developed with the fundraising teams at Scandinavia's largest charities. Inline validation, smart defaults and frictionless payments lift completion and recurring giving.

= Native Scandinavian payments =
Vipps, Swish, MobilePay and AvtaleGiro, with BankID and MitID identity, all out of the box. Recurring giving is a first-class flow, from subscriptions to lapsed-donor recovery.

= Connected to your CRM =
Donations sync directly to Profundo, OnlineFundraising, Salesforce and more.

= Private by design =
Personal data is held only until it syncs to your CRM, then deleted. Form analytics are Fundy's own, with no third-party trackers and no cookie consent required.

= Styled to match your brand =
Default, branded or fully bespoke. Every Fundy form respects your design system.

== External services ==

This plugin connects to the Fundy API to facilitate the fundraising functionality, both to show forms and to handle submissions.

It sends users personal data (manually entered into a form) when they submit a form. Form analytics events are sent to Fundy's own analytics service; no third-party analytics providers are used.

This service is provided by "Dekode Fundraising": [privacy policy](https://fundy.cloud/en/page/privacy).

== Frequently Asked Questions ==

= Do I need a Dekode Fundraising account? =
Yes, this plugin requires a [Fundy](https://fundy.cloud) subscription to use.

= Where do I report security bugs found in this plugin? =
Please report security bugs found in the source code of the Dekode Fundraising plugin through the [Patchstack Vulnerability Disclosure Program](https://patchstack.com/database/vdp/2f0c31ce-5a97-4435-a232-3555e1ba2fc8). The Patchstack team will assist you with verification, CVE assignment, and notify the developers of this plugin.

== Screenshots ==

1. Example of the Dekode Fundraising block editor block.
2. Example of the frontend form.

== Changelog ==

= 2.5.0 (2026-04-24) =
* Loads forms script in <head> when possible.
* Added Patchstack VDP link.

= 2.4.1 (2026-02-24) =
* Maintenance- Dependency updates.

= 2.4.0 (2026-02-06) =
* Enhancement- Added support for the new conversion and tracking scripts.
* Enhancement- Asset build dependency updates.
* Bugfix- Reverted `@wordpress/scripts` to `27.9.0`, to keep compatibility with WP 6.4 and up.

= 2.3.2 (2025-12-04) =
* Remove receipt link icon.

= 2.3.1 (2025-12-04) =
* Bundle languages dir in zip.

= 2.3.0 (2025-12-02) =
* Reintroduce translation files.

= 2.2.1 (2025-08-22) =
* Initial WordPress.org release.
