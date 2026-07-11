---
layout: layouts/base.njk
title: Kayla's Website Thingy
permalink: /index.html

pageJS: home.js
---
# About me

I'm Kayla (she/her)!! I live in Hamilton in Canada, am sometimes a pretty big fan of video games, and am very bad at writing about myself. This is my personal website for whatever ramblings I can come up with, alongside personal projects, art?????, and anything else I may find interesting. Most of that can (or eventually can) be found on the [blog](/posts/). You can check out my various socials in the footer (I have a lot less than I thought), check out the blog if I've written anything there yet, check out my [friends' zine](https://jamcollectivezine.substack.com/), or some [pretty good music](https://linktr.ee/demonbboi) in my biased opinion in the meantime!!

I plan on making a more professional website for work purposes at [mikaela.gulka.ca](https://mikaela.gulka.ca) *eventually* but for now this is what I have, so if you're an employer please don't judge too harshly 🙏🙏🙏

You can also [look at max](https://immich.home.gulk.ca/share/RzpvY6im3AED_QjjTjGSErjVR2L1-TG7fyrNBjkzLwJtsEyK5OOgANdeXMqIXQc9lAs) but please don't go too hard on that link!!!

{% set recentPost = collections.posts | last %}
## Featured Posts  
Most recent post:  
[{{ recentPost.data.title }}]({{ recentPost.url }}) - {{ recentPost.date.toDateString() }}  
{{ recentPost.data.description }}

<a href="javascript:void(0)" id="randomBlogButton">Random Blog Post</a>

<!-- This script needs to be in this file so we can use nunjucks to create the json
The actual javascript is in another file referenced in pageJS -->
<script id="allPosts" type="application/json">
    [
      {% for post in collections.posts %}"{{ post.url }}"{% if not loop.last %},{% endif %}{% endfor %}
    ]
</script>