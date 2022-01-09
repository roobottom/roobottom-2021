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

I live in Littlehampton on Britain’s sunny south coast with my wife, Katie and two children; “Roo” and “Rootwo”.

{% figure '/images/family-photo.jpeg', 'Me and my family on Littlehampton beach, Christmas day 2020.' %}

## Hobbyist and part-time web professional
Like most old-timers, I have a genuinely dull story about how I started coding when my dad brought a ZX Spectrum. Suffice to say, I was a geeky kid and enjoyed making stuff on my computer. Now I'm {{ global.dob | dateSince }}; I'm still building shitty websites like this one.

## Colophon
Over the years I've used all kinds of software to design and build this site. Recently I've been using:

* [Sketch](https://www.sketch.com/)
* [VS Code](https://code.visualstudio.com/)
* [Eleventy](https://www.11ty.dev/) — [{{ pkg.dependencies['@11ty/eleventy'] }}](https://github.com/11ty/eleventy/releases/tag/v{{ pkg.dependencies['@11ty/eleventy'] }}/)