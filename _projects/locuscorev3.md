---
layout: base
content_includes: [portfolio_item]
script_get:
  - button_to_section
title: LocusCoreV3
categories: [Ruby on Rails, Themes, TheLocusCo, Elixir, React, Redux, Phoenix]
client: Myself
role: Sole Developer
images:  [locuscore_home]
image_types: [png]
link: https://github.com/loualrid/locuscorev3
date: 2018-05-27
---

The LocusCoreV3 is the current revision of this site (February 2017 onwards). The frontend remains React but the backend was rewritten in Rails from Elixir's Phoenix as I had both too much time on my hands and not enough patience to build hex packages for the features that I wanted that Phoenix didn't have.

- Rails 5.1.6+
    - Running Postgres on Heroku
    - Unauthenticated and authenticated api routes
    - Devise Token Auth for authentication
    - CanCanCan for permissions
    - Paperclip for file uploads
    - Markdown in all user facing content creation
    - Ahoy for in-site analytics
    - Light-service gem for services used in several controllers
- React 16+
    - 36+ Presentational Components, 62+ Logic Components
    - Material UI forms for form interactions
    - create-react-app for ease of setup
    - react-moment for some light time parsing
    - react-showdown for displaying markdown
- Redux 5+
    - 40 reducers, more action functions than I would like for said reducers
- General Javascript Libraries
    - Processing.js (p5)
    - D3.js
- Theme is a heavily edited version of [Humanum](http://themeforest.net/item/humanum-responsive-vcard-template/5230208)

This is only for the front end, much of what goes on in the authenticated side leverages the full power of the stack to pull off some very interesting stuff. All analytics are handled within the site itself. These tools utilize D3.js to deliver rich analytics without the overhead of having a 3rd party monitoring the site directly.

Note: The View Site link for this project will take you to the repository that used to run this site.
