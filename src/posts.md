---
layout: layouts/base.njk
title: Kayla's Blog Thingy
---
# Here are my blog posts yipeeee

{% for post in collections.posts | reverse %}
    [{{ post.data.title }}]({{ post.url }}) - {{ post.date.toDateString() }}  
    {{ post.data.description }}
{% endfor %}