=== Dekode Fundraising ===
Tags: fundraising, donations, forms
Requires at least: 6.4
Requires PHP: 8.1
Tested up to: 6.8
Stable tag: 2.6.0
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

= 2.6.0 (2026-09-04) =
* Enhancement- Choose a form theme. Pick one of your organization's Fundy themes in the plugin's settings and every form on your site is styled with it.
* Enhancement- Use your own stylesheet. Enter a Custom CSS URL in the settings to style the forms exactly as you want. When set, it takes precedence over the selected theme.
* Enhancement- No more flash of unstyled forms. Your organization's styling is loaded ahead of the form itself, so forms look right from the moment they appear.
* Enhancement- Pick a form from a list. The block editor now lists your organization's forms, so you select one instead of typing its ID. If the API key has not been added yet, the block points you to the settings page.
* Enhancement- Block styles offered by your theme now apply to the form. The shortcode accepts a matching `variation` attribute.
* Enhancement- The Donation Form block is now called "Fundy Form", as it handles donation, lead, membership and petition forms, and it is easier to find in the block inserter.
* Enhancement- Visitors with JavaScript disabled now see a short message asking them to enable it, instead of an empty space.
* Enhancement- The block's text colour option has been removed, as it never reached the form itself. Background colour still works.
* Enhancement- Developers can override the custom stylesheet, the organization ID and early loading of form assets with new filters. See the plugin README for details.
* Bugfix- Extra URL parameters added to a block or shortcode are now validated before they reach the form.
* Maintenance- Updated build dependencies.

= 2.5.0 (2026-04-24) =
* Enhancement- Forms load sooner. The form script is now loaded early in the page where possible.
* Enhancement- Added a link for reporting security issues through Patchstack.

= 2.4.1 (2026-02-24) =
* Maintenance- Updated build dependencies.

= 2.4.0 (2026-02-06) =
* Enhancement- Added support for the new conversion and tracking scripts.
* Maintenance- Updated build dependencies.
* Bugfix- Restored compatibility with WordPress 6.4 and up.

= 2.3.2 (2025-12-17) =
* Enhancement- Removed the icon from the receipt link.

= 2.3.1 (2025-12-04) =
* Bugfix- Translations are now included in the plugin package.

= 2.3.0 (2025-12-02) =
* Enhancement- Translations are back.

= 2.2.1 (2025-08-22) =
* Initial WordPress.org release.
