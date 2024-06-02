---
layout: base
content_includes: [blog_item]
title:  "There and Back Again (Part 2)"
icon:   star
date:   2018-01-01
author: Louis Alridge
excerpt_separator: <!--exc-->
tags: [Processing.js, Authentication, React, Redux, Phoenix, Series, There and Back Again]
images:  []
image_types: []
---

If Redux has one problem, it's that getting React and Redux to work together requires a lot of very carefully crafted glue<!--exc-->. You need to write your reducers and your actions. You need to figure out how and where you're going to fetch your data from (though this is a generic frontend problem). You need to figure out how your actions and reducers will transform or utilize this data. Some Reactioneers even recommend foregoing Redux unless you _know_ you need it. I have mixed feelings on this but I would say that I disagree. Once you understand Redux, it really is pretty amazing; a logical way of passing all of your data around when you need it.

Anyway, after implementing a basic JSON database to pull categories and such from, I needed to implement posts and projects. This meant actually starting on the API part of my site via Phoenix. Fortunately Learnphoenix was useful here. Basic CRUD operations are supported via boilerplate methods on Phoenix controllers that give you a good idea of how you'll be working with data from your database. Getting my API to serve up the projects and posts with no authentication was pretty straightforward though it left me with a wary eye on how I was going to work with Guardian and Canary for the authed parts.

With a basic API serving some data, the next part was to figure out how I wanted to interact with this data in Redux. I opted for simple reducers that support requesting for multiple objects and requesting for a single object. From there, methods in the components would trigger actions in `redux/actions/sync.js` to request objects or actions in `redux/actions/async.js` to receive objects then send said object(s) to a dispatch for the reducers. With this implementation in place, I got projects and posts working but also made a note that I would need to return to this for better error handling and for pagination. For the project categories, I decided to pull a list of all categories belonging to projects from the API and then filter the projects reducer depending on the "activeCategory" the user selects.

Next, I needed to handle my web graphics. As I could not find a suitable react library for scenejs (a javascript lib that I used in college 5 years ago) I decided to forego those graphics until I can implement my own react lib for scenejs. That left only my processing.js graphics... On my old site, I was loading these graphics from the database by using server-side rendering to put the JS where it needed to be when the page was loaded. This approach doesn't work in React (as far as I can tell) because you can't inject code into a component that doesn't already exist somewhere in your frontend. I opted to have premade files that load the processing code depending on the chosen graphic but I wasn't very happy with that solution...

With the unauthed part of my site done, I needed to work on the authed part now. I had been dreading this moment as authentication and authorization always makes everything so much more complicated and lo and behold that held true this time as well. I quickly snapped together a basic login form (not the material UI one currently in place) and started digging into how Learnphoenix handled authentication with the backend. Their solution was simple and straightforward, the login form has a submit action that triggers a redux action that sends the auth params to the API. If the auth succeeds, the API will send back a token along with data about the user otherwise it will send a failed login. I don't mind this approach but it is a bit weak authentication wise. I opted to add some functionality to my Phoenix authentication controller to track login requests for a specific user, if a user's login requests exceeded a hard coded limit the controller would lock out that user. That way a malicious actor could not try and constantly test credentials against the API. With a note to return to auth when I was ready to work on security questions, I moved back to the frontend.

Here's a link for [part 3](https://loualrid.github.io/2018/04/02/there-and-back-again-part-3.html) where I discuss how I handled the authenticated part of my site and when I realized I had done it all wrong...
