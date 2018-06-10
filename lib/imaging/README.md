# Imaging

## create-app-headers

Creates images for each app pages. Example: /apps/access

### Setup

* Copy each app icon (each image that's 225x255 in docs\\assets\\apps) to lib\\imaging\\app-icons
* Run create-app-headers.js
* Copy each image outputted to the imaging folder to docs\\assets\\apps
* Delete the files in the working folder
* Delete the images you copied to the app-icons

## create-app-pages-headers

Creates images for the app page. Example: /apps

### Setup

* Copy each app icon (each image that's 225x255 in docs\\assets\\apps) to lib\\imaging\\app-icons
* Run create-app-page-headers.js
  * Must be run three times uncommenting the correct JS line:
  ```
  // create(1200, 1200, 210, 210)
  // create(1200, 900, 190, 190)
  // create(1200, 675, 150, 150)
  ```
* Copy each image outputted to the imaging folder to docs\\assets\\apps
* Delete the files in the working folder
* Delete the images you copied to the app-icons
