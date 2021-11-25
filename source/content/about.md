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

## Hobbyist and partime web professional
Like most old timers, I have a truly boring story about how I started coding when my dad brought a ZX Spectrum. Suffice to say I was geeky and enjoyed making web pages when I was a kid. Now I'm {{ global.dob | dateSince }}, I'm still building shitty little websites like this one.

I love the web and for the most part I've resisted on putting important content on third-party platforms. There's no danger of someone else deleting things; I own all of it and can move it anywhere I like. 

## Colophon
Over the years I've used all kinds of software to design and build this site. Recently I've been using:

* [Sketch](https://www.sketch.com/)
* [VS Code](https://code.visualstudio.com/)
* [Eleventy](https://www.11ty.dev/) — [{{ pkg.dependencies['@11ty/eleventy'] }}](https://github.com/11ty/eleventy/releases/tag/v{{ pkg.dependencies['@11ty/eleventy'] }}/)