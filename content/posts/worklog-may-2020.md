+++
canonical_url = "https://yax.com/posts/worklog-may-2020/"
content_img_path = ""
date = 2020-05-31T16:00:00Z
excerpt = "A day by day description of the technical and business challenges building Yax.com."
layout = "post"
subtitle = ""
thumb_img_path = ""
title = "Worklog: May 2020"
description = "How I built Yax.com. The worklog from May 2020."
draft = false
categories = ["worklog"]
tags = ["worklog", ""]
author = "Daniel Kehoe" 

+++

# Yax.com Daily Worklog

Each day I summarize the work I’ve done to build Yax.com, describing both technical and business challenges.

## May 1, 2020

### Tweak the blog layout and style
Spent the day tweaking the yax.com blog layout and style. I’m editing the [Hugo template](https://themes.gohugo.io/bulma/) with [Brackets](http://brackets.io/) and running a local server to immediately see the changes. I’m getting more comfortable with the Hugo templates and enjoying the simplicity of the [Bulma CSS](https://bulma.io/) framework. By the end of the day the blog was what I wanted.

## May 2, 2020

### Set up DNS at Netlify
Changed the yax.com nameservers from Cloudflare to Netlify. No need for Cloudflare since Netlify provides a content delivery network. Netlify isn’t able to provision an SSL certificate for the site when the DNS records for a site point to Cloudflare. Netlify provisioned an SSL certificate and I got `https://yax.com` working.

### Set up mailhosting at Purelymail
After setting up DNS on Netlify, I set up [Purelymail](https://purelymail.com/) as a mail host so email sent to `support@yax.com` will get routed to my personal email address. I’m happy I found Purelymail. Rather than spend $72/year per domain to have Google GSuite route mail, Purelymail charges me $10 year for unlimited domains and email addresses. Sweet.

### Set up automated Welcome mail at Sendinblue
When a visitor signs up for tutorials on the yax.com landing page, I want them to get a welcome email. [Sendinblue](https://www.sendinblue.com/) has instructions for “marketing automation” and I was able to set up a default template to send a message as soon as a visitor is added to Sendinblue’s Yax subscriber list. Just one problem: The email message ends up in my Gmail spam folder. I started troubleshooting the deliverability issues and looked for misconfiguration of SPF records.

## May 3, 2020

### macOS upgrade
I got sidetracked with a macOS upgrade. I love my little MacBook Air 11" that I’ve owned for seven years. I’ve avoided the last few years of macOS upgrades because I was sure the little Mac would just run slower and slower with each macOS update. But there are a few apps I’ve been unable to install because they require the newest macOS Catalina. I’m using the [Ulysses](https://ulysses.app/) Mac application for keeping notes (as well as [nvALT](https://brettterpstra.com/projects/nvalt/)) and I carelessly clicked “yes upgrade Ulysses” without thinking it might require Catalina. The updated Ulysses application installed quickly and then refused to run. So I started upgrading the Mac to Catalina. It took several hours, first to determine if all of the apps I use often will run on Catalina, then a long download and install session culminating in an error message that I didn’t have enough disk space for the upgraded OS, then housekeeping to remove files to make space followed by another long download and install session followed by updating serval applications. End result? I got the applications I need but the MacBook Air 11" runs noticeably slower.

### Fix deliverability for Yax.com mail
I sorted out the deliverability issues for the automated mail coming from Sendinblue. As I guessed, I had a problem with the SPF (Sender Policy Framework) records. SPF records are DNS records and mail clients check SPF records to see if mail from a domain really comes from that domain. I had SPF records authorizing both Purelymail and Sendinblue to send email on behalf of yax.com. I didn’t know the correct syntax for an SPF record to authorize two providers. It’s not obvious and there aren’t many articles to explain it. I found a great free service at [MXToolbox](https://mxtoolbox.com/) to diagnose mail configuration issues and found guidance for the correct syntax for an SPF record for multiple providers. Fixed it, tested the yax.com welcome email and behold! It wasn’t sent to the spam folder.

### Add live chat to yax.com
I’ve been using the [Crisp](https://crisp.chat/en/) live chat service on my [danielkehoe.com](https://danielkehoe.com/) personal website and it’s a great way for visitors to get in touch with me. If someone messages from the live chat window on the website, I get an alert on my iPhone and can converse using the Crisp app on my phone. The email provider Sendinblue offers a live chat feature that integrates with their email contact lists but there’s no phone app so I’ll just use Crisp for now. Just took me a few minutes to paste the Crisp JavaScript code into the Hugo template file, push to GitHub and see an immediate deploy of the site on Netlify. I want to engage with visitors to the yax.com site so I hope live chat will make that easy.

## May 4, 2020

### Add a 404 page to yax.com
Right now, visitors can sign up on the yax.com landing page and get a welcome email. But the welcome email contains links to pages I haven’t built yet. So I need a 404 page. “404” is the official HTTP error code for “page not found.” The Hugo template provides one but I updated it to add the Crisp live chat so I can engage directly with visitors who encounter the 404 page.

## May 5, 2020

A day for personal business.

## May 6, 2020

Did a retrospective and began compiling my daily notes into this worklog.

## May 7, 2020

A day for personal business.

## May 8, 2020

### Google Ads
In the past I’ve used Google Adwords to investigate what search terms are relevant to new projects. I’ll see what I learn with a single ad using a few keywords. I haven’t been a Google Ads user since it was Adwords ten years ago and the interface has changed a lot. It used to be complicated and now it’s extra complicated. Looks like it’s even easier to carelessly waste hundreds or thousands of dollars. I set a low budget and short duration for the campaign. Mostly just to get familiar with Google Ads again. 

## May 9, 2020

### Configure Google Analytics
I configured Google Analytics to integrate with Google Ads. Not sure if it’s working as it’s been a day already and my Google Ads are not yet approved. Also I went down a rabbit hole trying to link Google Analytics with Google Search Console so I can see what search terms people are using to find my site. Apparently a bottomless rabbit hole as you can’t link Google Analytics with Google Search Console unless you’ve verified your site ownership using a “URL prefix” method. I used a “Domain name provider” method and there doesn’t seem to be a way to backtrack and use the “URL prefix” method. Google recently released a new version of Search Console and apparently hasn’t updated its help pages. Really this is the continued devolution of the web into increasing complexity and specialization.

## May 10, 2020

I completed my retrospective and published the worklog.

## May 11, 2020

A day for personal business.

## May 12, 2020

A day for personal business.

## May 13, 2020

Moved to a new villa. Relocation takes time, even with five years of experience as a digital nomad.

## May 14, 2020

Read about Deno (an alternative to Node) and Stackbit’s Sourcebit project.

## May 15, 2020

### Learned about integrating Bulma and Hugo
I took a look at how the “Bulma for Hugo” theme integrates Bulma with Hugo. I saw that Bulma CSS can be customized but it requires setting up Node to run a Sass compiler. I found a [bulma-start](https://github.com/jgthms/bulma-start) project that provides a simple example.

## May 16, 2020

### Installed XCode Command Line Tools
I wanted to learn about customizing Bulma CSS which requires installation of Node for running a Sass compiler. NPM (the Node Package Manager) requires Apple XCode Command Line Tools for compiling native add-on modules for Node (using node-gyp). I had the XCode CLT installed but after updating to macOS Catalina, XCode CLT was broken. I removed the older version and installed the latest version. I got NPM working properly. Then I took time to update my article at [install-rails-mac.com](https://install-rails-mac.com/) with what I learned about installing XCode CLT on macOS Catalina.

## May 17, 2020

### Learned about customizing Bulma
I looked at using the [Bulma-Extensions project](https://wikiki.github.io/) to add components to the yax.com website. Investigated setting up custom CSS for Bulma with Node. I tried setting up the Bulma-Extensions calendar component but got stuck integrating the required JavaScript using Node. Realized I didn’t need Bulma custom CSS or JavaScript for the comparison table I’m going to add to the yax.com site. So I just spent several days on an unnecessary detour, complicated by the complexity of current website build tools.

## May 18, 2020

### Set up a comparison page
I added a static page to the Hugo project for yax.com. Learned how to add an HTML page that incorporates Hugo partials. And how to add a menu item for the new page. I used a pricing table from the [Bulma-Extensions project](https://wikiki.github.io/) as a base component for the comparison table. There’s no content yet for the comparison. I’ll do some research and identify what people care about before adding content to the comparison table.

## May 19, 2020

### Read about tiny websites
Read today on Hacker News that [“Tiny websites are great”](https://news.ycombinator.com/item?id=23228904). Someone said there’s a need for a service that can:

* Host static content like Netlify or Neocities
* Allow you to register a domain
* Choose a template and enter content with basic markup

I agree that a choice of templates is important. On-page editing is also important. The current crop of commercial website builders require a clunky web application to edit and publish templates. The website builders are clunky because they do two things in one interface: modify layout and edit content. I think that can be simplified with on-page editing. First choose and publish a template, then edit it in place. We’ve got JavaScript solutions that allow on-page editing. Let’s use that for editing templates. For many use cases, there’s no need to modify a layout, if there’s a good choice of templates.

## May 20, 2020

### Looked at implementing a photo gallery in Mavo
My friend Dea owns a flower shop in Kuala Lumpur. Last year a web developer built a simple website for her using the Envato Sites website builder. Last month she found out her web developer was no longer available and Envato Sites was shutting down its hosting service. I helped Dea recover her website files and set up the site on Netlify for free hosting. This week she told me she wanted to update her gallery of photos of bouquets. She wants to make simple updates to her site without learning to use a website builder or hiring a web developer. That’s a key pain point I want to address with the Yax project. Updating a simple web page should not require hiring a web developer or relying on a proprietary service that can go out of business. I took a look at [Mavo](https://mavo.io/), an extension to standard HTML that enables on-page editing of web pages. It’s a research project from Lea Verou at the MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL). I tinkered with a photo gallery example. It’s interesting but I encountered some issues (photos didn’t appear after uploading, perhaps because of some permissions issues).

## May 21, 2020

### Implemented an editable website with Mavo
I decided to explore building website templates that include Mavo for on-page editing so a Yax user will have no need for a website builder application like Wix. I built a simple website using a [classless CSS stylesheet](https://www.cssbed.com/) and added Mavo.  Log in using a GitHub account, edit the page in the browser, and versioned changes get saved to a GitHub repository. Nice! But the HTML title and meta tags can’t be edited from within the browser so I need to find a way to customize the template when copying the template from GitHub. Initially I thought maybe I could use GitHub Actions but it’s not clear how to do that (and I didn’t get any replies when I posted a question to the GitHub API Development and Support Forum). I’ll look instead at building an application that copies HTML template files from a GitHub repo, changes the title and meta tags, and saves the modified template to a new GitHub repository.

## May 22, 2020

### Working with the GitHub API
I found a Ruby gem [github_cli](https://github.com/piotrmurach/github) that implements the GitHub API as a terminal application. The gem is quite old and I had some issues with configuration and authorization and opened some issues. Got it working and experimented with creating a repository and a README file from the command line. It’s kinda cool to use a command line tool to create a repo filled with some files.

## May 23, 2020

### Program to create a file in a GitHub repo
It was easy to use the command line tool to create a GitHub repo and some files. Next step was to try it programmatically. I used the [GithubAPI](https://github.com/piotrmurach/github) gem in a simple Ruby program (running locally) to create a GitHub repo and add a file to the repo. This is cool.

## May 24, 2020

### Set up a GitHub organization for Yax
I set up a GitHub organization account [yaxdotcom](https://github.com/yaxdotcom) and created a repository with a simple website template (too bad the account name “Yax” is already taken, I'll have to settle for yaxdotcom). I’ll use the organization account to store the repos for website templates. 

### Program to modify a template and save it in a new repo
I wrote a simple Ruby program to read an _index.html_ file from the Yax repo (using Ruby `open-uri` to get the file). I used Nokogiri to parse the file as an HTML document and replace the HTML title text. Then I used the [GithubAPI](https://github.com/piotrmurach/github) gem to create a GitHub repo and add the index.html file to the repo. Works great! Next step is to get the program running in the cloud (not just running locally).

## May 25, 2020

### Looking at FaaS Platforms for Serverless Functions
Until recently, the only way to write a web application was to use a framework such as Ruby on Rails and deploy a standalone program to a web server. I  don’t want to write a Rails application just to experiment with the Yax website concepts. There’s a lot of overhead to tooling, coding, and deploying a standalone web application, especially for a simple program like what's needed for Yax. Instead, we can now write simple “serverless” functions and deploy them with companies that offer FaaS (functions as a service, in the cloud). It’s a fast-growing market with many FaaS providers, including the large companies Amazon Web Services (AWS), Google Cloud, and Microsoft Azure. I spent the day looking at FaaS providers. Mostly I wanted to know:

- what programing language can I use?
- how difficult is it to configure and deploy?
- how difficult is it to learn?
- what is the cost to run a function?

Smaller and newer companies Netlify and Vercel have the simplest configuration and deployment. Netlify supports JavaScript or Go. Vercel supports JavaScript, Go, Python, and Ruby. I’ll try Vercel. Ruby is my preferred programming language (I’m familiar with it) but on AWS I found that Ruby is difficult to use for serverless functions because of poor support for native gems (such as the Nokogiri gem I used for parsing the HTML template file). I’ll explore Ruby on Vercel and see how it works. Before I do that I’m going to try something new named [Dark](https://darklang.com/) (also called darklang). It might be another way to run server functions.

## May 26, 2020

### Dark Tutorial
I tried the official [tutorial for Dark](https://darklang.github.io/docs/your-first). I ran into a problem because I didn’t follow the tutorial closely. I solved the problem and forked the documentation and made some improvements and submitted a [pull request](https://github.com/darklang/docs/pull/129). I was happy to see the project maintainers incorporated the changes just a few days later. 

## May 27, 2020

### Building with Dark
I reimplemented the simple Ruby program using the Dark “canvas.” The canvas is an integrated editor, API query tool, and web server with its own advanced programming language. It’s really a new way of working without the overhead of setting up lots of tooling and separate applications for programming. It’s really quite different from the usual way of working, and it takes some patience to use the editor, but the concept appeals to me.

## May 28, 2020

### Troubleshooting Dark
My Dark application is working except for the final step which creates an HTML template file in a GitHub repo. If I use the Dark function `String::base64Encode "README"` GitHub accepts the content. If I try the same function but include a `<` character, GitHub errors with "content is not valid Base64.” I reported the anomaly to the Dark #bugs Slack channel. I can’t use Dark for my application until the bug is fixed. Dark is useful for rapid prototyping because it’s easy to examine HTTP requests and create API endpoints. Maybe it's not suitable for production yet. I’ll move on to try Vercel next.

## May 29, 2020

I began writing an evaluation of Dark.

## May 30, 2020

### Trying Ruby on Vercel
It was easy to get started with Vercel. The documentation for using Ruby is sparse but I was able to run a few simple Ruby programs as functions. It’s as simple as pushing a Git repo that contains an `api` folder with some Ruby program files. Nothing to configure or set up. No tooling needed. Best of all, I didn’t have problems using the Nokogiri gem. On AWS I couldn’t use it because it requires compiling for the operating system. On Vercel, I just specified it in a Gemfile and it runs.

## May 31, 2020

### Building with Ruby on Vercel
I tried a few things with Ruby on Vercel: a redirect as a response to an HTTP request, Ruby logging, and environment variables. Then I built a full Ruby program like the one I’m running locally. In response to an HTTP request it copies a file from the Yax template repository, replaces the title tag, creates a new repository and stores the modified template file.

[Previous: Worklog for April 2020]({{< ref "/posts/worklog-april-2020.md" >}}) - [Next: Worklog for June 2020]({{< ref "/posts/worklog-june-2020.md" >}})

