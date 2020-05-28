# minhthanh3145.github.io 

Originally posted [here in my blog](https://dafuqisthatblog.wordpress.com/2020/05/27/why-i-built-another-writing-application/)

- [Another writing application ? What for ?](#another-writing-application--what-for-)
- [Features](#features)
  - [Add Source](#add-source)
  - [Search](#search)
  - [Export Data](#export-data)
  - [Changing location of sidebar](#changing-location-of-sidebar)
  - [Preview Markdown](#preview-markdown)
    - [Feedback](#feedback)
- [Technology stack:](#technology-stack)
- [Timline and tasks](#timline-and-tasks)
- [Deployment](#deployment)
  - [Frontend](#frontend)
    - [Netlifly (Initial choice and final choice)](#netlifly-initial-choice-and-final-choice)
    - [Github page (Dropped due to weird styling thing)](#github-page-dropped-due-to-weird-styling-thing)
  - [Backend](#backend)
    - [Heroku (Initial choice)](#heroku-initial-choice)
    - [Openode (Final choice)](#openode-final-choice)
- [Final words](#final-words)

Another writing application ? What for ?
----------------------------------------

I think the ability to find insights give individuals unique competitive advantages. As someone who wants to thrive in this world, I decided that I want to obtain insights, at least in software development (which is what I do for a living).

To find insights, you need to think effectively. To think effectively, you must make your thinking tangible, so that you can look and see what's ineffective. As far as I know, writings are the only tangible outcomes of thinking. Therefore I write a lot. However, writing is so difficult that, not all of my high-quality writings get published, and not all of my published writings are of high quality.

When I write, I tend to read a lot of sources, oscillating between them as needed to compare and contrast ideas. After having some interesting thoughts, I will write them down. But such thoughts are often ostensible, or they hint at possibly new ways of interepreting existinng information. So I switch back to the sources to reconcile the new thoughts with them. This switching, when done frequently, feels unnecessary.

What is lacking is a workspace where I can search for and read relevant sources without ever leaving the tab. I thought it would be fun and valuable to implement a simple writing workspace where you can drop in the source, search for, read relevant references, and write within the same workspace. _AWA_ is the result.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.32.29-pm-2.png?w=1024)

For taking notes, I used [Roam Research](https://roamresearch.com/) obessively. However, Roam is a note-taking tool, and it's not a writing workspace that serves the purpose of gathering sources and experiment with thoughts. On the opposite, you have to be mindful what to install into Roam, becaus it is designed to build a long-lasting repository , if you're following the [Zettlkasten method](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125).

**Another Writing Application** is built as a place where you can dump your disorganized thoughts, organize them and then dump the organized thought into Roam or other places. In fact, I wrote this article using _AWA_, with 7 references. It is not intended to replace anything, just an attempt in making writing, and consequently thinking, more convenient.

Therefore, gathering sources, read, search for and experimental writing, all in the same place, is what **Another Writing Application** is for.

**The application is publicly available [here](https://another-writing-application.netlify.app/).**

Features
--------

### Add Source

When you add an URL to _AWA_, it calls the server to extract content using [Mercury Parser](https://github.com/postlight/mercury-parser) and insert that content into your local storage. The backend doesn't store anything, it just returns the extracted content. As you read your sources for the first time, drop the URL into this and continue reading.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.17.25-pm.png?w=952)

### Search

When you have an interesting narrative, write it down. If you hit a term that summarizes a broad topic which you're trying to articulate, search for that term.

By default, **search-focus mode** is used. Search-focus mode separates a given source into paragraph blocks, and only display the blocks that contain the searched term. You can expand other blocks to see the surrounding context.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.30.00-pm.png?w=830)

If you want even more broader context of the searched result, switch to **whole-text mode** to see the entire text of the source.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.30.03-pm-1.png?w=830)

### Export Data

You can export the data in `json` format. The exported file contains additional metadata extracted using Mercury Parser. Your writing will always has the ID `curren_note`.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.13.40-am.png?w=1024)

### Changing location of sidebar

Some enjoys the sidebar on the right (like Roam).

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.14.02-am.png?w=1024)

But some would enjoy the sidebar on the left. You can change it either way. Please let me know which one you prefer more.

### Preview Markdown

Using [Marked](https://github.com/markedjs/marked) to produce a HTML string from your writing and display it in the modal.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.14.12-am.png?w=1024)

#### Feedback

See anything you don't like ? Please feedback so that I can improve it. I use [SmtpJs](https://www.smtpjs.com/) to send the email, using my own email, so it is anonymous.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.14.17-am.png?w=1024)

**The application is publicly available [here](https://another-writing-application.netlify.app/).**

Technology stack:
-----------------

*   **Backend**: NodeJS, Express, [Mercury Parser](https://github.com/postlight/mercury-parser).
*   **Frontend**: [Hyperapp](https://github.com/jorgebucaran/hyperapp), Bootstrap, [Compromise](https://github.com/spencermountain/compromise), [PouchDB](https://github.com/pouchdb/pouchdb)

I love Hyperapp by the way. It’s a minimalist approach to building web application. The concepts that you need to learn are way less than React and other front-end frameworks.

Timline and tasks
-----------------

I use [Agenda](https://agenda.com/) to keep my to-do and agenda. The entire process took me 6 days.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-5.07.49-pm.png?w=818)

There are bug fixes and features that I don't explicitly add to the list, because I was in the flow.

Deployment
----------

### Frontend

#### Netlifly (Initial choice and final choice)

I chose Netlify as a static hosting solution because its [free tier](https://www.netlify.com/tos/) seems sufficient.

![](https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.16.10-am.png?w=1024)

#### Github page (Dropped due to weird styling thing)

Somehow, my website on Github page is not styled exactly as what I see in my local development, while the version hosted on Netlify looks exactly the same.

### Backend

#### Heroku (Initial choice)

My backend is just a NodeJS application with Express, Cors (for local use) and [Mercury Parser](https://github.com/postlight/mercury-parser) as dependencies.

Initially, I deployed the backend to Heroku. The deployment was really simple, which was good. However, [Heroku hibernates your app once in a while, and your app must sleep a certain amount of time within 3 days](https://medium.com/@AndreyAzimov/how-free-heroku-really-works-and-how-to-get-maximum-from-it-daa53f2b3c57). In short, availability wasn't guaranteed. Even though this is an open-sourced project and monetization isn't the goal, I want it to be available. The unreliability of Heroku was a big demotivator for me, so I looked for an alternative.

I looked into Netlifly cloud functions. However, there was [a limitation on the number of requests and number of running time](https://www.netlify.com/products/functions/). Then I thought that "free server hosting" was too broad a search phrase. My backend is a simple NodeJS-Express application. With that in mind, I looked into "free nodejs app hosting", and after a bit of browsing, I stumbled across openode. It offers a free-tier for open-sourced projects. A quick google search did not reveal any limitation about availability, as least not so much that people would make such complaints available on Google search. I decided to go with openode.

#### Openode (Final choice)

One thing I enjoyed about openode is that the deployment process is available through a commandline tool. Not too much up-front knowledge to be learnt for most NodeJS app developers. However, it wasn't without friction.

**The application is publicly available [here](https://another-writing-application.netlify.app/).**

Final words
-----------

Building this application has really been an interesting challenge to me. I have had the opportunity to increase my problem solving, prototyping, time management skills, as well as how to use deliver an application from inception to delivery.

Let me know if you have any feedback !
