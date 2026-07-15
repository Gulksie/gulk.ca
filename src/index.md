---
layout: layouts/base.njk
title: Kayla's Website Thingy
permalink: /index.html
---
# About me

I'm Kayla (she/her)!! I live in Hamilton in Canada, am sometimes a pretty big fan of video games, and am very bad at writing about myself. This is my personal website for whatever ramblings I can come up with, alongside personal projects, art?????, and anything else I may find interesting. I made it with 11ty, you can check out the source code with more info at its [github repo](https://github.com/Gulksie/gulk.ca). Most of that can (or eventually can) be found on the [blog](/posts/). You can check out my various socials in the footer (I have a lot less than I thought), check out the blog if I've written anything there yet, check out my [friends' zine](https://jamcollectivezine.substack.com/), or [definitely unbiased amazing music](https://linktr.ee/demonbboi) while waiting for a new or interesting post :)

I plan on making a more professional website for work purposes at [mikaela.gulka.ca](https://mikaela.gulka.ca) *eventually* but for now this is what I have, so if you're an employer please don't judge too harshly 🙏🙏🙏

You can also [look at max](https://immich.home.gulk.ca/share/RzpvY6im3AED_QjjTjGSErjVR2L1-TG7fyrNBjkzLwJtsEyK5OOgANdeXMqIXQc9lAs) if you want to see a cute dog

{% set recentPost = collections.posts | last %}
## Featured Posts  
Most recent post:  
[{{ recentPost.data.title }}]({{ recentPost.url }}) - {{ recentPost.date.toDateString() }}  
{{ recentPost.data.description }}

[Random Blog Post](/randomPost.html)
