---
layout: base
content_includes: [portfolio_item]
script_get:
  - button_to_section
title: LocusCoreV2
categories: [Ruby on Rails, Themes, TheLocusCo, Elixir, React, Redux, Phoenix]
client: Myself
role: Sole Developer
images:  [locuscore_home]
image_types: [png]
date: 2018-05-26
---

The LocusCoreV2 is was the revision of this site from December 2017 to February 2018). It was rebuilt from rails as an experiment in learning React and Elixir that ended up taking longer than I would of liked. On the other hand though, it gave me a very thorough understanding of Elixir and React after going through the learning pains. A short overview of the non-admin stuff...

* Phoenix 1.3+
    * Running Postgres on Heroku through Elixir's Ecto
    * Unauthenticated and authenticated api routes
    * Ueberauth and Gaurdian for authentication
    * Canary for authorization, Canada for permissions
    * Arc for file uploads
    * Markdown in all user facing content creation
* Rails 5.1+
    * Microservice for serving resumes
        * Resumes are generated from prawn text stored in the database
* React 16+
    * 36 Presentational Components, 62 Logic Components
    * Material UI forms for form interactions
    * create-react-app for ease of setup
    * react-moment for some light time parsing
    * react-showdown for displaying markdown
* Redux 5+
    * 40 reducers, more action functions than I would like for said reducers
* General Javascript Libraries
    * Processing.js (p5)
* Theme is a heavily edited version of [Humanum](http://themeforest.net/item/humanum-responsive-vcard-template/5230208)

This is only for the front end, much of what goes on in the authenticated side leverages the full power of the stack to pull off some very interesting stuff. All analytics are handled within the site itself utilizing custom written analytics tools created by Louis Alridge. These tools utilize processing.js to deliver rich analytics without the overhead of having a 3rd party monitoring the site directly.
