---
layout: base
content_includes: [blog_item]
title:  "There and Back Again (Part 3)"
icon:   star
date:   2018-04-02
author: Louis Alridge
excerpt_separator: <!--exc-->
categories: [React, Redux, Phoenix, Series, There and Back Again]
images:  []
image_types: []
---

As a developer, I try to go out of my way to never repeat myself in code. Generally, if I end up using the same code more than<!--exc--> once I will look for ways to refactor the code. This goes hand in hand with another thing I am not fond of building: forms. Generally web forms are a recipe in drudgery and constantly repeated code. I generally like to avoid this by using database built in methods that generate metadata for your models. Instead of hand coding a form for each model, I'd rather send the metadata for a model to the frontend and have the frontend build the form from there. I was pleased to find that React and Redux made this doable but not straightforward. I needed to create a Redux form component that would take in the model's metadata (and the record's actual data in the case of an edit) and render that data as a form. I accomplished this by passing along the fields and their types along with some unique types like "categories" and "media" that acted as special fields that would be used to populate the joins for the record. Overall the implementation came together well but still was one of the most difficult parts of building the authed part of the site.

From there, I just needed to tighten up some loose ends in the code and deploy. The loose ends mostly being support for certain interesting models like comments and user permissions. For deploying, I opted to work with what I knew, Heroku. Heroku handled phoenix relatively well and thanks to some elixir based buildpacks it was relatively straightforward to get everything running and version 2 of my site launched.

After the ordeal of re-implementing the site Elixir, React, and Phoenix though I began to realize something that worried me... Elixir's (and Phoenix's) communities had implemented the necessary parts to get a *good* web framework out but there is a distressing lack of projects for some useful edge-ish case libraries. The biggest one for me was the lack of a good pdf generation library for Elixir. I've become accustomed to building my resumes and other "official" documents with Ruby's Prawn but no such thing existed for Elixir. At best, Elixir had some html to pdf generation libraries that were somewhat outdated (I generally try to only use libraries that have had commits in the last 6 months). If I was fully invested in Elixir (and had a job in it) I would not mind this but as a Rails dev looking at Rails jobs vs Elixir jobs, it was part of a trend where Elixir was the cool language but lacked a following from companies and individuals.

Here's a [link](https://loualrid.github.io/posts/there-and-back-again-part-4-final) to the final part of the series where I discuss my rational behind porting the site back to Rails and interesting quirks between Phoenix and Rails that I noticed...
