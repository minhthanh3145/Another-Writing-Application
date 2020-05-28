# minhthanh3145.github.io
Originally posted [here in my blog](https://dafuqisthatblog.wordpress.com/2020/05/27/why-i-built-another-writing-application/)

<!-- wp:heading -->
<h2>Another writing application ? What for ?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I think the ability to find insights give individuals unique competitive advantages. As someone who wants to thrive in this world, I decided that I want to obtain insights, at least in software development (which is what I do for a living).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"normal"} -->
<p class="has-normal-font-size">To find insights, you need to think effectively. To think effectively, you must make your thinking tangible, so that you can look and see what's ineffective. As far as I know, writings are the only tangible outcomes of thinking. Therefore I write a lot. However, writing is so difficult that, not all of my high-quality writings get published, and not all of my published writings are of high quality.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When I write, I tend to read a lot of sources, oscillating between them as needed to compare and contrast ideas. After having some interesting thoughts, I will write them down. But such thoughts are often ostensible, or they hint at possibly new ways of interepreting existinng information. So I switch back to the sources to reconcile the new thoughts with them. This switching, when done frequently, feels unnecessary.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What is lacking is a workspace where I can search for and read relevant sources without ever leaving the tab. I thought it would be fun and valuable to implement a simple writing workspace where you can drop in the source, search for, read relevant references, and write within the same workspace. <em>AWA</em> is the result.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2884,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.32.29-pm-2.png?w=1024" alt="" class="wp-image-2884"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>For taking notes, I used <a href="https://roamresearch.com/">Roam Research</a> obessively. However, Roam is a note-taking tool, and it's not a writing workspace that serves the purpose of gathering sources and experiment with thoughts. On the opposite, you have to be mindful what to install into Roam, becaus it is designed to ff , if you're following the <a href="https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125">Zettlkasten method</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Another Writing Application</strong> is built as a place where you can dump your disorganized thoughts, organize them and then dump the organized thought into Roam or other places. In fact, I wrote this article using <em>AWA</em>, with 7 references. It is not intended to replace anything, just an attempt in making writing, and consequently thinking, more convenient.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Therefore, gathering sources, read, search for and experimental writing, all in the same place, is what <strong>Another Writing Application</strong> is for.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><strong>The application is publicly available <a rel="noreferrer noopener" href="https://another-writing-application.netlify.app/" target="_blank">here</a>.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Features</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>Add Source</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When you add an URL to <em>AWA</em>, it calls the server to extract content using <a href="https://github.com/postlight/mercury-parser">Mercury Parser</a> and insert that content into your local storage. The backend doesn't store anything, it just returns the extracted content. As you read your sources for the first time, drop the URL into this and continue reading.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2868,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.17.25-pm.png?w=952" alt="" class="wp-image-2868"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Search</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When you have an interesting narrative, write it down. If you hit a term that summarizes a broad topic which you're trying to articulate, search for that term.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By default, <strong>search-focus mode</strong> is used. Search-focus mode separates a given source into paragraph blocks, and only display the blocks that contain the searched term. You can expand other blocks to see the surrounding context.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2871,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.30.00-pm.png?w=830" alt="" class="wp-image-2871"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>If you want even more broader context of the searched result, switch to <strong>whole-text mode</strong> to see the entire text of the source.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2870,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-11.30.03-pm-1.png?w=830" alt="" class="wp-image-2870"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Export Data</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can export the data in <code>json</code> format. The exported file contains additional metadata extracted using Mercury Parser. Your writing will always has the ID <code>curren_note</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2872,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.13.40-am.png?w=1024" alt="" class="wp-image-2872"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Changing location of sidebar</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Some enjoys the sidebar on the right (like Roam).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2873,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.14.02-am.png?w=1024" alt="" class="wp-image-2873"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>But some would enjoy the sidebar on the left. You can change it either way. Please let me know which one you prefer more.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Preview Markdown</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Using <a href="https://github.com/markedjs/marked">Marked</a> to produce a HTML string from your writing and display it in the modal.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2875,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.14.12-am.png?w=1024" alt="" class="wp-image-2875"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4>Feedback</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>See anything you don't like ? Please feedback so that I can improve it. I use <a href="https://www.smtpjs.com/">SmtpJs</a> to send the email, using my own email, so it is anonymous.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2876,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.14.17-am.png?w=1024" alt="" class="wp-image-2876"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><strong>The application is publicly available <a rel="noreferrer noopener" href="https://another-writing-application.netlify.app/" target="_blank">here</a>.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Technology stack:</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>Backend</strong>: NodeJS, Express, <a rel="noreferrer noopener" href="https://github.com/postlight/mercury-parser" target="_blank">Mercury Parser</a>.</li><li><strong>Frontend</strong>: <a rel="noreferrer noopener" href="https://github.com/jorgebucaran/hyperapp" target="_blank">Hyperapp</a>, Bootstrap, <a rel="noreferrer noopener" href="https://github.com/spencermountain/compromise" target="_blank">Compromise</a>, <a rel="noreferrer noopener" href="https://github.com/pouchdb/pouchdb" target="_blank">PouchDB</a></li></ul>
<!-- /wp:list -->

I love Hyperapp by the way. It’s a minimalist approach to building web application. The concepts that you need to learn are way less than React and other front-end frameworks.

<!-- wp:heading -->
<h2>Timline and tasks</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I use <a href="https://agenda.com/">Agenda</a> to keep my to-do and agenda. The entire process took me 6 days.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2877,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-27-at-5.07.49-pm.png?w=818" alt="" class="wp-image-2877"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>There are bug fixes and features that I don't explicitly add to the list, because I was in the flow.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Deployment</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>Frontend</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4>Netlifly (Initial choice and final choice)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I chose Netlify as a static hosting solution because its <a href="https://www.netlify.com/tos/">free tier</a> seems sufficient.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2878,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://dafuqisthatblog.files.wordpress.com/2020/05/screen-shot-2020-05-28-at-1.16.10-am.png?w=1024" alt="" class="wp-image-2878"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Github page (Dropped due to weird styling thing)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Somehow, my website on Github page is not styled exactly as what I see in my local development, while the version hosted on Netlify looks exactly the same.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Backend</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4>Heroku (Initial choice)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>My backend is just a NodeJS application with Express, Cors (for local use) and <a href="https://github.com/postlight/mercury-parser">Mercury Parser</a> as dependencies.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Initially, I deployed the backend to Heroku. The deployment was really simple, which was good. However, <a href="https://medium.com/@AndreyAzimov/how-free-heroku-really-works-and-how-to-get-maximum-from-it-daa53f2b3c57">Heroku hibernates your app once in a while, and your app must sleep a certain amount of time within 3 days</a>. In short, availability wasn't guaranteed. Even though this is an open-sourced project and monetization isn't the goal, I want it to be available. The unreliability of Heroku was a big demotivator for me, so I looked for an alternative.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I looked into Netlifly cloud functions. However, there was <a href="https://www.netlify.com/products/functions/">a limitation on the number of requests and number of running time</a>. Then I thought that "free server hosting" was too broad a search phrase. My backend is a simple NodeJS-Express application. With that in mind, I looked into "free nodejs app hosting", and after a bit of browsing, I stumbled across openode. It offers a free-tier for open-sourced projects. A quick google search did not reveal any limitation about availability, as least not so much that people would make such complaints available on Google search. I decided to go with openode.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Openode (Final choice)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One thing I enjoyed about openode is that the deployment process is available through a commandline tool. Not too much up-front knowledge to be learnt for most NodeJS app developers. However, it wasn't without friction. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><strong>The application is publicly available <a rel="noreferrer noopener" href="https://another-writing-application.netlify.app/" target="_blank">here</a>.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>final words</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Building this application has really been an interesting challenge to me. I have had the opportunity to increase my problem solving, prototyping, time management skills, as well as how to use deliver an application from inception to delivery.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let me know if you have any feedback !</p>
<!-- /wp:paragraph -->
