---js
{
  title: "About",
  permalink: "/about/",
  eleventyExcludeFromCollections: true,
  hideDate: true,
  layout: "page.njk",
  page: {
    navigationId: 'about'
  }
}
---
Hello, I’m Jon, and this is my website. I’ve been writing here for the last {{ collections.stats.allPosts.timespan }} years, mainly about my personal life, so it’s of little interest to anyone else. 

I live in Littlehampton on Britain’s sunny south coast with my wife, Katie and two children. I call my kids “Roo” and “Rootwo” throughout this site.

{% figure '/images/family-photo.jpeg', 'Me and my family on Littlehampton beach, Christmas day 2020.' %}