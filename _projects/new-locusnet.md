---
layout: base
content_includes: [portfolio_item]
script_get:
  - button_to_section
title: thelocus.co and the New Locusnet
categories: [Ruby on Rails, Themes, Website]
client: Myself
role: Sole Developer
images:  [new_locusnet]
image_types: [png]
date: 2018-05-20
---

Oh man, where to begin... The New Locus is essentially the culmination of everything I've learned about rails so far. It leverages the full stack and many gems that improve the dev experience. A short overview...

* Ruby on Rails v4
  * Running Postgres on Heroku
  * Most pages written in haml
  * Devise & CanCan for auth, custom written extensions for improved security
    * Cookie-Crypt
  * [RedCloth](http://redcloth.org/) for textile markup in all user facing content creation
  * [Loofah](https://github.com/flavorjones/loofah) with custom extensions for html comment cleanup
  * [Textacular](https://github.com/textacular/textacular) for search and fuzzy_search logic
  * [Rack-Attack](https://github.com/kickstarter/rack-attack) for middleware IP logic
* Capybara and PhantomJS test suite
* Ruby 2.0.0
* Jquery 2.0.X
  * Cycle2
  * Backstretch
  * Magnific-Popup
  * Tooltipster
* Javascript Libraries
  * Processing
  * SceneJS (via SceneJS on Rails)
* Gratuitous amounts of AJAX magic
* Theme is a heavily edited version of [Humanum](http://themeforest.net/item/humanum-responsive-vcard-template/5230208)

This is only for the front end, much of what goes on in the back end leverages the full power of the stack to pull off some very interesting stuff. All analytics are handled within the site itself utilizing custom written analytics tools created by Louis Alridge. These tools utilize processing.js to deliver rich analytics without the overhead of having a 3rd party monitoring the site directly.
