---
layout: base
content_includes: [portfolio_item]
title: Cookie Crypt
categories: [Ruby on Rails, RubyGems]
client: Myself (Open Source)
role: Main Developer
placeholder_image: true
link: https://github.com/loualrid/CookieCrypt
date: 2018-05-21
---

Cookie Crypt is a rails gem I originally had the idea for while working at Trinovus. It is a Devise authentication solution that sets up an additional level of authentication for users.

The idea is to add another layer of security between the system treating the "current user" as authenticated. After the user provides their correct username and password they are passed from Devise's authentication to Cookie Crypts'. Once in the controller, the system determines first and foremost if the current user has a valid encrypted cookie. The cookie is an encrypted value of the user's username and the system's encrypted version of their password that lasts for 30 days (this can be increased or decreased in the config). There are 3 conditions that must be valid to pass the auth solution without the user entering more information.

* The user's encrypted cookie must exist and must not of expired
* The user's encrypted cookie's value must match the generated value
* The user's user agent *must* match one of a list of user agents previously saved for said user

If the user does not have a cookie or the value does not match (the user changed their password or an admin changed their username), the user must re-authenticate through Cookie Crypt. The user is directed to a form asking them to input 2 security questions and two security answers they will need to remember for when their cookie expires if they have not previously created said questions and answers. If the questions and answers have already been created, the user need only supply their answers (the questions and answers cannot be changed through the system once set, exposing them is left to the admins). If the user correctly enters the answers to their questions or sets their questions and answers, they are authenticated through Cookie Crypt and their user agent is added to their list of authenticated agents.

Rationale on user agent collection is as follows. A "hacker" attempting to gain access to the system through obtaining a user's username and password needs to also acquire a copy of the user's cookie. However, if said hacker attempts to login without finding out the user-agent the user used to get the cookie, the system will immediately recognize this as a hacking attempt and lock out that user account. User agent parsing logic is provided via the "Useragent gem":https://github.com/josh/useragent and will not trigger undesired behavior for _incremental upgrades in the user's user agent_.

A "hacker" that has access to the user's username, password, and exact answers to both of their security questions cannot be prevented from logging in. A "hacker" that only has the username, password and cookie can be caught if they are sloppy. This is not a perfect solution, as more accurate fingerprinting techniques such as plugin and font parsing could be utilized to assure a higher match, but that draws its own host of problems.

Afterword: The user's security questions are stored as plain text in the database but their security answers are not, they are encrypted. More information is available at the "View Site" button, it'll take you to the github repo.
