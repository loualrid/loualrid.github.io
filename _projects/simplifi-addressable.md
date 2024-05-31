---
layout: base
content_includes: [portfolio_item]
script_get:
  - button_to_section
title: Simplifi Addressable
categories: [Ruby on Rails, Kubernetes, VueJS, Geofencing, Simpli.fi, Google Maps]
client: Simpli.fi
role: Senior Full Stack Engineer
images:  [addressable]
image_types: [png]
link: https://simpli.fi/our-solutions/media-buying-solutions/programmatic-media/addressable
date: 2024-05-27
---

Simplifi's Addressable product was not built by me but I quickly became intimately familiar with it after working closely with the original full stack engineer. It consisted of several parts that worked together to deliver a programmatic audience _based_ on residential and business addresses to a campaign manager. Using the tool they could build more relevant campaigns based on rich demographic and geospatial data (in the US and Canada). I worked on the project primarily in 2021 and was a "consultant" (aka someone who fixes things when no one else can) for it from 2022 to 2024.

From a technical standpoint, the Addressable product consisted of a VueJS frontend and a Rails backend running on IBM that talked to the Simplifi data lake and its own database to parse customer queries into a curation that could then be attached to a campaign. My involvement in the project was more on the infrastructure and the backend side though I eventually became very familiar with the entire stack (including the data science and data engineering side). This "project" is actually what showed me one of the fundamental problems behind Kubernetes and infrastructure-as-code solutions, without engineering-wide adoption it can be extremely difficult to support and maintain a stack that differs from what the standard at the company is.

To make the product easier to understand, I created numerous diagrams using Google Drawings and later Icepanel to help illustrate the tangled web of interconnections the product had between all of the different major parts of Simplifi ecosystem.
