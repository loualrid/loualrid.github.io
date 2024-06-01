---
layout: base
content_includes: [blog_item]
title:  "How to Logout a User From Within AngularJS"
icon:   link
date:   2014-03-17
author: Louis Alridge
excerpt_separator: <!--exc-->
categories: [Ruby on Rails, Angular.js, Authentication, Devise]
images:  []
image_types: []
---

In my recent forays into AngularJS for a project I was working on, I wondered "How does one logout a user from rails<!--exc--> from within AngularJS?" I spent a few hours trying different things. 

At first, I was hoping angular's access to window.location would allow me to trigger a logout by doing:
```javascript
window.location.replace('/users/sign_out')
```
But I quickly realized that there was more going on behind the scenes with Devise than I was aware of. In vanilla rails with devise, you would ordinarily do...
```ruby
 =link_to "Logout", destroy_user_session, method: :delete
````

And think nothing of the key part... the `method: :delete`. Devise only takes delete requests to destroy a user session! A simple get request will return a routing error. Thus, I tried creating a method in my user controller within rails that I could send users to and redirect them to a logout event. This, however, is also naive. You *cannot* redirect to anything other than a GET request.

After becoming a little bit aggravated, I decided to return to the root and look more into what AngularJS offered. After doing some API research into the $http provider, it does indeed posses a .delete method that one can utilize to trigger a delete request. Thus I tried this...
```javascript
$scope.go_logout = () ->
  $http.delete('/users/sign_out').success( () ->
  window.setTimeout(
    () ->
      window.location.replace('/')
      , 1500)
  )
```

Which it turns out, was also naive. While the delete request does occur and the server registers the user as logged out, there is a problem. As devs using devise know, the browser is redirected to your root path after the user session is destroyed _but_ because $http.delete is handling the request, it treats the *redirect* as a DELETE request which causes an error in angular as no smart rails app is setup to handle delete requests to its root path. It is feasible to setup a catch within your rails application that would handle this case and let the timeout event occur, but that feels wrong no? So I continued my search.

After some googling, I came across [J Wynia's look into Javascript's XMLHttpRequest](http://www.wynia.org/wordpress/2007/03/not-just-get-and-post-http-put-and-delete-with-javascript) and decided to get hacking. The end result was a method that basically did the same thing `$http` was doing but caused rails to return a *204 No Content* instead of a 304 redirect! This then lets you independently set the user's location as no error occurs.
```javascript
$scope.go_logout = () ->
  xmlhttp= new XMLHttpRequest()
  string = window.location.protocol + '//' + window.location.host + '/users/sign_out'
  xmlhttp.open('DELETE', string, true)
  xmlhttp.setRequestHeader('X-CSRF-TOKEN', $("meta[name=\"csrf-token\"]").attr("content"))
  xmlhttp.send(null)
  window.setTimeout(
    () ->
      window.location.replace('/')
    , 1500)
  )
```

While it is indeed a bit hacky... It does work. Its worth noting that you *must* extract the csrf token and insert it into the header or else Rails will return an authenticity error for obvious reasons. The timeout is there because the server must process the request. If you trigger the location change without a delay, the server will not log the user out.

Notes: The code snippets were written with coffeescript, also my blogging software interpolates - and > together into ->. This code was written for AngularJS stable 1.2.14.
