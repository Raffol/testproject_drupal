**Test task for setting up the public section in the CMS Drupal**
You can use standard CMS templates for the visual version.

The website consists of several pages (sections):
1) Home;
2) Product Catalog;
3) Reviews;
4) Contact Information.

The homepage has a header (logo, phone number, address), below which is the website menu (consisting of the pages described above).

After the menu is a block with a slider.
The slider contains:
1) Full-width image;
2) Title;
3) Short description;
4) Link.
All information should be editable through the admin panel.

Enable slider with swiperjs

After the slider is a block with reviews;
This block should display 2-3 recent reviews;

A review consists of the following fields:
- Full Name - who left the review;
- Review - a text description of the review; - Date - when the review was left.

At the bottom of the page is a footer with additional information (social media, address, product categories).

The "Product Catalog" section

consists of a menu by product category (2-3 categories) on the left side of the page. On the right side is a list of products with information (image, name, and brief description of the product, plus a link to a detailed description of the product).

The "Reviews" page
This page displays a list of all recently published reviews.
The fields are the same as on the main page.

Before the list, there is a "Leave a Review" button. Clicking it opens a pop-up window with a review submission form. The form contains the following fields (name, review, phone number, email). After submitting the form, the website visitor sees the message "Your review has been submitted." An email is sent to the website manager notifying them of the new review, and a Telegram notification should also be sent.
The review is saved in the CMS database but is not published until the website manager publishes it.

"Contact Information" page
Contains brief information about the company and a map with a location marker (2GIS).
