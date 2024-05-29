---
layout: base
content_includes: [portfolio_item]
script_get:
  - button_to_section
title: WebGL Solar System
categories: [SceneJS, WebGL]
client: Texas Tech University, Later Myself
role: Developer
images:  [solar_system]
image_types: [png]
date: 2018-05-18
---

Duo project between myself and Kevin Thomas for our CS4395 Intro to Computer Graphics Class in the Spring 2012 Semester of Texas Tech’s Comp Sci Department.

The project was written in scene.js for the graphic capabilities then tied into normal js for keyboard controls and variable handling. I setup the rings on the planets as well as the ring orbit paths each planet moves on. I was also the one who setup the keyboard controls and variables. I also setup the sun, here’s a little excerpt from what I wrote for the project documentation.

bq. For the sun I wanted to do something quite special. First I tinkered with applying transparency layers to the sun. This is dealt with using flags in scenejs and specifying the shape and location of the objects that will be within the transparent object. The “inner” sun is only just visible thanks to the “corona layer’s” high alpha value but the inner sun is what emits the light. I chose this route as it leads to a realistic view of the sun, especially when combined with a custom shader I integrated.

The “corona” or transparent layer of the sun possesses a custom shader that moves its position vertices a slight bit every second in a sinusoidal fashion. This is done by setting up a custom shader to only affect its nodes (which in this case is just the corona layer) and then binding this effect to a hook to be called in the idlefunc. The custom shader could also be used to change the color matrix of the object as well as its vertices under more or less the same principle. Regardless, one other interesting fact is that while the inner sun object emits the light, the outer transparent sun object must have a value ‘applyTo: “emit”’ to actually allow light to pass through it. Otherwise the sun takes on a very different appearance.

Kevin Thomas handled rendering the planets correctly and making sure the texture mapping worked as intended on them. He also computed the astronomically correct rotation speeds and integrated those with my host of variables.

The script was originally submitted to our CS4395 teacher, Mohan Sridharan. It was later integrated into the ACM@TTU website and used to rest on this website.
