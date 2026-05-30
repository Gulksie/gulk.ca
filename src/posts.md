---
layout: layouts/base.njk
title: Kayla's Blog Thingy
---
# Here are my blog posts yipeeee

{% for post in collections.posts %}
    [{{ post.data.title }}]({{ post.url }}) - {{ post.data.date | prettyDate }}
{% endfor %}