---
layout: base
content_includes: [blog_item]
title:  "There and Back Again (Part 4)"
icon:   star
date:   2018-05-28
author: Louis Alridge
excerpt_separator: <!--exc-->
categories: [Ruby on Rails, Ruby, Elixir, Phoenix, Series, There and Back Again]
images:  []
image_types: []
---

Deciding to port thelocus.co back to Rails for the backend was somewhat jarring. Not because of the code, it was<!--exc--> relatively straightforward to rewrite my Elixir code into Ruby and Rails already supported all of the quirks of the Elixir - Phoenix - Ecto ecosystem. No, what made porting it back jarring was the sense of wasted time. I had spent several months doing tutorials, learning Elixir and trying to become proficient with it to only become disappointed. Both at the lack of Elixir jobs and the lack of a community working to further the language. Some may view that as a positive though, a niche language that solves some problems very well and has a lot of opportunity for establishing oneself as a leader in the community... Regardless, I had already tried that route with Rails and was not about to do that again in Elixir land. Rails' community is still larger than Elixir's and that doesn't appear to be changing anytime soon as Ruby / Rails are still used around the world far more than Elixir.

Beyond the social side of the Elixir vs Ruby debate, there was one major difference between their web frameworks (Phoenix and Rails) that really got to me. In Rails' ActiveRecord, you can define polymorphic associations like so:
```ruby
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :commentable, polymorphic: true
end

class User < ApplicationRecord
  has_many :comments
end

class Post < ApplicationRecord
  has_many :comments, as: :commentable
end

class Project < ApplicationRecord
  has_many :comments, as: :commentable
end
```
But in Phoenix's Ecto, there is *no* support for polymorphic associations by design, their reasoning being "You can’t use foreign keys and it is very inefficient, both in terms of query time and storage." Instead, they want you to either use foreign key columns on the comments for associations or implement join tables between your comments and other models. While both of these approaches are more efficient, for a small hobby project they can have a great deal of overhead compared to a simple polymorphic association.

I ended up implementing join tables for my comments and the lack of polymorphic associations was just the first quirk in a long list of painful quirks that ended up feeling more like gotchas. To illustrate this, let's think about posts and categories for a post. As you don't have polymorphic associations, you need a join table for every model that needs categories, fine, you end up with:
```elixir
many_to_many :categories, LocusCoreV2.Category, join_through: LocusCoreV2.PostCategory
```
But there's a gotcha here, a gotcha you won't understand unless you read the docs for [Ecto Schemas](https://hexdocs.pm/ecto/Ecto.Schema.html) and you play around with how the `many_to_many` association works. If you create a new category for a post with this association and you delete that post, the `posts_categories` join table will still have a record for the deleted post and the category. Furthermore, if you try and change the post's categories (like removing 1 out of 3 categories for example), you will actually get a somewhat difficult to understand error that is **the intended result** in this case. To bypass both of these gotchas, you need to define your association as follows:
```elixir
many_to_many :categories, LocusCoreV2.Category, join_through: LocusCoreV2.PostCategory, on_replace: :delete, on_delete: :delete_all
```
This gives you some sane functionality, if your post changes its categories, it will delete the join table entries that are no longer being used and if the post is deleted it will delete all of the `posts_categories` join table entries. Sadly, this is just the tip of the Ecto iceberg though. To actually **_add_** a new category, you need to first define a `put_assoc` for your changeset like so:
```elixir
Ecto.Changeset.put_assoc(:categories, parse_categories(params))
```
Then you need to make sure your params are sane, though this is something you need to be aware of in Rails as well:
```elixir
def parse_categories(params) do
    (params["categories"] || [])
    |> Enum.reject(& &1["name"] == "") # reject blank categories
    |> Enum.reject(& &1["name"] == "All Categories") # Reject meta category
    |> insert_and_get_all_categories()
  end
```
And then finally, you need to insert your new categories and ensure the categories returned are *the only ones you want for that post*:
```elixir
def insert_and_get_all_categories(maps) do
    names = maps |> Enum.map(fn(x) -> x["name"] end)
    parsed_maps = for map <- maps do
                    for {k, v} <- map do
                      %{"#{k}": v}
                    end |> Enum.map(&Map.put(&1, :inserted_at, Timex.now))
                        |> Enum.map(&Map.put(&1, :updated_at, Timex.now))
                        |> Enum.map(&Map.delete(&1, :id))
                        |> Enum.reject(& &1[:name] == nil)
                  end |> List.flatten()

    Repo.insert_all LocusCoreV2.Category, parsed_maps, on_conflict: :nothing
    # Return categories so the JOIN_categories table can be populated
    Repo.all(from c in LocusCoreV2.Category, where: c.name in ^names)
  end
```
It's worth noting that `parsed_maps` is taking the the category map (hash in ruby lingo) being passed from the frontend and turning it into a map that can be safely thrown at the `insert_all`. The `insert_all` actually is very neat here, with the `on_conflict: :nothing` flag, it won't raise errors if a category is thrown at it that already exists though that's assuming you want every category to have a unique name. Regardless, after your new categories are inserted into the category table, you need to return the current categories for the post or else the association will purge any that don't exist or won't add any of the new ones.

With all of that, you now have a working way of adding / deleting categories for a model. Something that could've been done with a polymorphic association in Rails with much less research and time; it took me around a week to gain the above insights and have a working category association that did what I expected it to do. The primary benefit of doing it this way being speed and database efficiency.

The above nitpick and series of gotchas was one of many that I had with Elixir's ecosystem. While I appreciate the power it gives you (much less magic than Rails) a lot of that power can only be gleaned by being in the thick of it, implementing a solution to some problem. If given the opportunity, I would use the language again but not for my own personal projects.

Thanks for sticking with me on this series about my experiences with Elixir and React. <!--This is the last one but if you missed any of the previous ones, they can found [here](https://thelocus.co/search_results?model=posts&category=There%20And%20Back%20Again&page=1).-->
