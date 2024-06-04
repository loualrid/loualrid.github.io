---
layout: base
content_includes: [blog_item]
title:  "Jekyll and Github Pages"
icon:   github
date:   2024-06-04
author: Louis Alridge
excerpt_separator: <!--exc-->
tags: [Ruby on Rails, React, Jekyll, Liquid, Series]
images:  []
image_types: []
---

Github Pages is an interesting offering, for "free" you get a solid web host tied to your Github account<!--exc--> and some decent documentation to get you started. Unfortunately (or fortunately) it comes bolted to Jekyll and not just any Jekyll, a heavily locked down and neutered version of it that doesn't have access to most of the Jekyll ecosystem. No plugins or gem-based themes is a hard sell for a server framework that already is pretty light on options. I have to wonder if Github was planning to open up more support options for Pages at some point but gave up as more non-coder friendly website builders like SquareSpace gained more market share. As is, I wouldn't recommend Pages to anyone other than someone already decently versed in the fundamentals of web development and just happens to be looking to save a bit of money on a blog site. Not having access to a rich plugin ecosystem or theming is better for security but is a non-starter for people looking to build a basic e-commerce site.

So the positives... static sites are fast and Jekyll gives you just enough tools to put together a good blog without needing to resort to the extreme lack of don't-repeat-yourself that a pure HTML, CSS, JS blog could run into. Jekyll's "backend" is ruby and makes heavy use of the [Liquid](https://shopify.github.io/liquid/) templating API that Shopify pioneered. The tutorials for Jekyll and Liquid could be better but the actual [documentation](https://jekyllrb.com/docs/) definitely helps understand the intended way to use many of its systems. I also strongly benefited from examining a few of a free Jekyll themes to see how they laid out files and folders as it is not very clear how intimately linked the directory structure of a Jekyll deployment is to what actually gets rendered by the server. Posts, post categories / tags and post pagination are linked in ways that I don't think the documentation handles very well but it is definitely serviceable once you understand what it's trying to make you do to setup a blog.

As for the negatives... well Liquid kinda sucks. There are some neat ideas in it like `|` acting as a way to pipe a value into a function like `'test' | append: 'ing'` but the lack of being able to define new functions on Github Pages makes this extremely restrictive with only access to the base set of functions. Implementing new functions as plugins is actually quite easy but unfortunately it can't be done on Github Pages so even something simple like a ternary `val == true ? 'display me' : 'dont display me'` requires a long and awkward inline if-else block {% raw %}`{% if val == true %} display me {% else %} dont display me {% endif %}`{% endraw %}. There's also some amusing gotchas with some arrays in Liquid starting at `index: 1` instead of `index: 0` and dedicated methods like `forloop.index0` to return the value counted from 0 instead of 1. Overall I'm not a fan and I definitely understand why most of the free Jekyll themes are unmaintained if this is the templating they have to work with.

Still, I can't complain all that much. A distressingly large amount of my old React-heavy site's code was dedicated to the admin portion and forms to edit and maintain the various objects: users, roles, posts, projects, etc. The forms took a markdown string and saved it off to the database to be rendered as html when a visitor accessed the relevant page / context. Markdown has first class support in Jekyll and it is very nice to just be able to write posts and projects in VSCode markdown and leave it at that. No complicated auth logic for users or dependencies for directly rendering markdown as html, it just works.

Keep an eye out for part 3 where I talk about my experience with going back to minimal usage of javascript after living in React-land for so long.
