---
layout: base
content_includes: [blog_item]
title:  "There and Back Again (Part 1)"
icon:   star
date:   2017-12-11
author: Louis Alridge
excerpt_separator: <!--exc-->
categories: [Ruby on Rails, Elixir, React, Redux, Phoenix, Series, There and Back Again]
images:  []
image_types: []
---

Back in August of 2017 I had a dilemma. I was tired of working on Ruby on Rails applications that were kludges of glue and<!--exc--> bad practices, barely held together by test suites and some very questionable use of jQuery. Every job I have ever worked has dragged me through the dirt with jQuery and I have had enough.

From my readings, I have seen many interesting frontend frameworks appear over the last several years but outside of Angular 1 I had yet to actually play with any of them. My developer friends had developed a keen interest in React so I figured I would tackle my disillusionment with web development by taking on a project that would give me the chance to really learn React. My ailing portfolio site was several years old at this point so I decided I would rebuild it to wet my feet in React.

As I started on the project, I realized that I wanted to try something new from the backend side as well. I had heard good things about Elixir and Phoenix so I decided to jump off the deep end and learn two new sets of languages and frameworks at once. In retrospect, this was *almost* a bad idea but I stuck with it. Having a project with a meaty yet not-too-big scope sounded like a good idea at the time for healing my web dev burnout.

As I got underway, I decided to follow the [LearnPhoenix](https://www.learnphoenix.io/#/?_k=0cdwp5) tutorial as it met my use cases and looked like it was fairly in depth for learning both React and Elixir. While the React versions of the tutorial went relatively smoothly I quickly realized that __Elixir is not Ruby__, while obvious, this made even basic Elixir code a struggle to understand and the tutorial did not help much here. I resigned myself to picking up the pieces as I went along and furthering my progress on the tutorial app. As I neared the end of the intercom.io chat app, I had a few revelations:

* React is very cool, there are some really neat ideas here that make frontend development genuinely enjoyable.
  * The tradeoff is that you lose development speed compared to jQuery until you have a good breadth of components.
* Elixir is hard. Ecto is hard. Phoenix is Rails but not really.
  * All of the "handholding" that Rails does for you is pretty much gone in Elixir, there is very little "Magic" in Elixir / Phoenix.
  * Ecto is much faster than ActiveRecord (kind of like Squeel) but loses much of the easy conveniences that a Rails dev may rely on.
* Redux is very hard.
* The Learnphoenix tutorial is not very good.
  * NOTE: This is because some of the code in the tutorial is wrong and as there are no commits, it is difficult to track down issues, [my release of it](https://github.com/TheLocusCo/phoenix-chat-frontend) is the most complete working version that I have seen as of late 2017.

Upon completion of the tutorial app, I decided to dive right into my rebuild of thelocus. As usual with new frameworks, the moment the training wheels come off the pain begins and painful it was. From the frontend side, I needed to figure out how to leverage my understanding of React to create a single page web app. Much of this revolved around researching what people actually use rather than what a poor tutorial says you should use cause it's quick and easy. This quickly lead me to learning react-router v4 among other handy tools but showed me another major problem, I didn't really "get" Redux.

After grappling with Redux for a few days, I opted to attempt to build the unauthed parts of my site without it so I could at least make some progress while I learned more about React and ES6. That helped but after tinkering with component state management, and seeing how some redux examples were implemented, I realized there was not much use but to dive right in. Rather than start on my elixir-phoenix API, I instead opted to implement a json db in redux that some elements would fetch their data from. This worked well to get the basic idea / implementation of Redux down but still left a gaping hole in how I would handle the posts and projects for my site.

Here's a link to [part 2](https://loualrid.github.io/posts/there-and-back-again-part-2) where I discuss how I started digging into Phoenix.
