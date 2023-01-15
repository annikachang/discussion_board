# Discussion Board (c4c technical)

## Table of contents 
* [Overview] (#overview)
* [Explanation of project] (#explanation-of-project)
* [Challenge requirements fulfilled] (#reqs-fulfilled)
* [Setup] (#setup)


## Overview 
MVP web application for a global anonymous message board created using Node.js, ejs, Express, Bootstrap 4, and sqlite3.

## Explanation of project 
Database 'Forum.db' within the db directory is a sqlite3 database that stores all the posts submitted to the message board. Index.js file has one get request to retrieve all data in the database and one post request to insert text that is submitted through the message board. views directory contains the ejs template for the home page which renders all posts and the message board form. 

## Challenge requirements fulfilled 
* Home page renders all the posts in the database from most to least recently posted.
* Posts that are submitted through the message board must not be empty or more than 128 characters. If constraints aren't met, message is not saved to the database and user is alert via a notification. 
* Data persists using a sqlite3 database. 


## Setup 
To run this project, install it locally using npm. 
```
$ npm install
$ npm index.js
```
