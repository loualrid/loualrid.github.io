---
layout: base
content_includes: [blog_item]
title:  "DevOps and Startups"
icon:   cloud
date:   2014-12-05
author: Louis Alridge
excerpt_separator: <!--exc-->
tags: [DevOps, Business]
images:  []
image_types: []
---

As I have worked at SocialCentiv, I have encountered a rather interesting dilemma I was unaware of until I began<!--exc--> examining business strategy for startups.  

First and foremost, as exemplified in [The Lean Startup](http://theleanstartup.com), you need to be able to setup an MVP (minimum viable product) and deploy said product as quickly as possible. This leads to a problem where your infrastructure must behave in a way that facilitates MVPs without becoming a bottleneck. Such a problem becomes even more complex when you add in split testing and so on, especially for any testing that requires backend changes. In a traditional environment with a cloud operations provider (like Heroku), I believe this will rather quickly lead to severe headaches as developers have to tackle both the nuanced infrastructure of the provider and the infrastructure needed by the application(s) themselves.

How is this resolved? Well, the (somewhat biased) answer I'd give is DevOps engineers focusing on codifying the infrastructure. A skilled DevOps team lets you perform many infrastructure tricks that would be difficult if not impossible (not to mention costly) with a cloud operations provider. Indeed, _The Lean Startup_ does advocate that you need to have infrastructure in place that facilitates testing, anything that gets in the way of that is costing the company valuable innovation time... It is at this level however, that the dilemmas begin to arise...

Generally, startups should be focused on learning first and costs second but costs will always factor into what a startup pursues. The first dilemma is: should a startup invest in scalable, and malleable infrastructure or setup with an operations provider? I believe the answer to this is a matter of scale. A 1-5 man startup most likely does not have the infrastructure requirements to justify a DevOps investment but in the medium term this quickly becomes a very important decision to make. This then leads into the second dilemma: do you treat your infrastructure as an MVP or as a critical part of the business? I also believe this answer depends on scale... with the latter obviously being preferred by everyone, not just engineers.

MVI (minimally viable infrastructure) is both a very interesting and dangerous topic but it is nonetheless where many startups stand as they lack the resources to build out a sound infrastructure. In fact, I'm relatively certain MVI can only be guarded against after a startup has reached a certain level of resources, otherwise speed will dictate that shortcuts must be made. Is this a bad thing? As long as the business is not affected at a fundamental level, no. Although it will definitely keep some poor engineers up at night.

Sadly, until DevOps becomes as robust as application engineering (it's getting there, but still rather niche) it will be a tough area for startups to tackle with no clear roadmap other than look into what cuts costs in the mid-term.
