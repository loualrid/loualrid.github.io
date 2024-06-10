---
layout: base
content_includes: [blog_item]
title:  "VanillaJS and JS Frameworks"
icon:   monitor
date:   2024-06-06
author: Louis Alridge
excerpt_separator: <!--exc-->
tags: [React, Angular.js, Processing.js, Redux, Series, The Path to Pages]
images:  []
image_types: []
---

This rework of my portfolio site uses the least amount of javascript I've ever deployed with a project<!--exc-->, all-in-all there's 300 lines of unminified vanilla javascript for the interface plus a single third party script for the contact form captcha. This is down from 16,528 lines of React jsx plus 2062 packages looking at the `locuscorev3` `node_modules` folder. I am not fond of needing to use external scripts / services for the contact form but sadly that is the reality of using Github Pages and not having any exposed web hosting services that could send an email on the application's behalf. The amount of CSS did increase from 3,166 lines to 3,509 but that's to be expected because of using the new keyframe animations and other pure CSS tricks that replaced the React package for handling animations that I was using.

Even way back in the days of mid 2010s when I first put this theme together on the still very nice looking bones of the DT-crea wordpress theme there was still quite a lot of javascript needed to make it work. Granted that javascript was mostly jQuery as this was before the days of javascript frameworks and CSS being nowhere near as powerful as it is now but the point still stands that the theme has come a long way. Wordpress allows the site owner to ignore a lot of the backend / admin portion of the site as that just uses default wordpress theming that can optionally be slightly improved by wordpress plugins but it planted the thought in my head of how nice it would be if the admin portion was just as nice or nicer than the un-authed portion of the site.

Unfortunately, spending a bunch of time and effort on a part of your website that only you and a few others will see if probably not worth the time unless the effort dramatically improves / eases the act of creation. My goal with the admin part of the site was lowering the activation cost of making new content but even with all the bells and whistles that never quite materialized leaving me with thousands of lines of complex react / redux code that had little benefit. I could have rewritten the app to just be the un-authed part of the site to get a refactor out sooner but this still leaves me with dependencies to maintain and most likely heavy use of redux to load static project / post data.

If there was another frontend framework I really wanted to learn, a refactor would have been a good way to pick it up but as far as I know there's not any game-changers out there like the advent of React and Vue years ago. A refactor in that way would have kicked the can further down the road but to what end? Hence I decided to just go the Github Pages route which funnily enough could support a JS framework if you used that to generate a static site which is then deployed onto pages / Jekyll but why? What do you really gain other than not writing HTML directly if you use a JS framework to generate a static site?

Here's a [link](https://loualrid.github.io/2024/06/10/is-github-pages-becoming-abanadonware.html) to part 4 where I talk about my future plans with this site and Github Pages as a platform.
