# CougarMatheletics Website
This is a Next.js project for your CougarMatheletics club at the University of Houston.
It uses firebase as backend and Next JS and React JS as front - end.

![CougarMatheletics Logo](https://github.com/kennethpdang/CougarMatheletics/blob/main/public/logoimage.png?raw=true)

The file hierarchy looks like:
```
📁 Components
📁 Public
```

**The uses of each folder:** \
Components: To create re-usable components, such as the navbar and other things. \
Library: For custom react JS hooks and for backend information and tokens (perhaps MongoDB or Firebase). \
Pages: Each URL route of the application goes here. \
Public: For Favicons, Icons, Logos, other images (background images and banners). \
Styles: For both specific page cascading style sheets and general cascading style sheets.

## Updated By Kenneth on Monday July 18, 2022
- Created all pages for both admin and users and created the main components in each one of those files.
- Add toaster JS library for custom end-user feedback.

## Updated By Kenneth on August 6, 2022
- Added Framer motion to homepage to animate logo on load.
- Resized the SVG for mobile devices.
- Added a Footer component along with links to socials of Cougar Matheletics and a copyright statement.
- Added a qoute onto the homepage.
- Added a section for posts and filled with temporary posts with nice color pallete.
- Added a z-index to navigation bar so that prefetched images don't overlap the navigation bar.

## Updated by Kenneth on August 10, 2022
- Added a custom Google font in the _document.js page for the about us page.
- Updated the style of the about me page: added top to inner div (div nested in main) so that it does not overlap navigation bar on load, added CSS grid property to inner div, added CSS property to HTML form nested inside inner div.
- Added a log-in-and-sign-up page as well as a log-in HTML form.
- Added icons along with user bio's for each of the CougarMatheletic officers.
