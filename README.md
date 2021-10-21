# YelpCamp
> A Node.js web application from Colt Steele's Yelp Camp project. YelpCamp is a web Application in which users can add and find campgrounds and review them. It also has a clustered map where location of campgrounds are displayed. This website is seured using helmet.

## Live Demo

To see the app in action, go to [https://yelpcamp-shrutij.herokuapp.com/](https://yelpcamp-shrutij.herokuapp.com/)

## Features

* Authentication:
  
  * User login with username and password
  * Cannot create new campgrounds without login

* Authorization:

  * One cannot manage posts  without being authenticated

  * One cannot edit or delete posts and comments created by other users


* Manage campground posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload campground photos

  * Display campground location on  Maps
  

* Flash messages responding to user's interaction with the app

* Responsive web design

### Custom Enhancements

* Update campground photos when editing campgrounds

* Use Helmet to strengthen security
 
## Getting Started

> This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.

## Stack

* HTML, CSS, Bootsrap 
* EJS, EJS Mate
* Nodejs, Express
* MongoDB
* Joi
* MapBox
* Cloudinary
* Helmet
* Passport,passport-local
* Express-session
* Method-override
* Geocoder
* Connect-flash

## Future Plans
- [ ] Searching Campgrounds
- [ ] Reset Password
- [ ] Campground Categories


## Deployed using Heroku, database on MongoDB Atlas
