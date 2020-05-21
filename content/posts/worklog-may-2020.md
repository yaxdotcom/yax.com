+++
canonical_url = "https://yax.com/posts/worklog-may-2020/"
content_img_path = ""
date = 2020-05-20T16:00:00Z
excerpt = "A day by day description of the technical and business challenges building Yax.com."
layout = "post"
subtitle = ""
thumb_img_path = ""
title = "Worklog: May 2020"
description = "How we built Yax.com. The worklog from May 2020."
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
Changed the yax.com nameservers from [Cloudflare](https://www.cloudflare.com/) to [Netlify](https://www.netlify.com/). No need for Cloudflare since Netlify provides a content delivery network. Netlify isn’t able to provision an SSL certificate for the site when the DNS records for a site point to Cloudflare. Netlify provisioned an SSL certificate and I got `https://yax.com` working.

### Set up mailhosting at Purelymail
After setting up DNS on Netlify, I set up [Purelymail](https://purelymail.com/) as a mail host so email sent to `support@yax.com` will get routed to my personal email address. I’m happy I found Purelymail. Rather than spend $72/year per domain to have Google GSuite route mail, Purelymail charges me $10 year for unlimited domains and email addresses. Sweet.

### Set up automated Welcome mail at Sendinblue
When a visitor signs up for tutorials on the yax.com landing page, I want them to get a welcome email. [Sendinblue](https://www.sendinblue.com/) has instructions for “marketing automation” and I was able to set up a default template to send a message as soon as a visitor is added to Sendinblue’s Yax subscriber list. Just one problem: The email message ends up in my Gmail spam folder. I started troubleshooting the deliverability issues and looked for misconfiguration of SPF records.

## May 3, 2020

### macOS upgrade
I got sidetracked with a macOS upgrade. I love my little macBook Air 11" that I’ve owned for seven years. I’ve avoided the last few years of macOS upgrades because I was sure the little Mac would just run slower and slower with each macOS update. But there are a few apps I’ve been unable to install because they require the newest macOS Catalina. I’m using the [Ulysses](https://ulysses.app/) Mac application for keeping notes (as well as [nvALT](https://brettterpstra.com/projects/nvalt/)) and I carelessly clicked “yes upgrade Ulysses” without thinking it might require Catalina. The updated Ulysses application installed quickly and then refused to run. So I started upgrading the Mac to Catalina. It took several hours, first to determine if all of the apps I use often will run on Catalina, then a long download and install session culminating in an error message that I didn’t have enough disk space for the upgraded OS, then housekeeping to remove files to make space followed by another long download and install session followed by updating serval applications. End result? I got the applications I need but the macBook Air 11" runs noticeably slower.

### Fix deliverability for Yax.com mail
I sorted out the deliverability issues for the automated mail coming from Sendinblue. As I guessed, I had a problem with the SPF (Sender Policy Framework) records. SPF records are DNS records and mail clients check SPF records to see if mail from a domain really comes from that domain. I had SPF records authorizing both Purelymail and Sendinblue to send email on behalf of yax.com. I didn’t know the correct syntax for an SPF record to authorize two providers. It’s not obvious and there aren’t many articles to explain it. I found a great free service at [MXToolbox](https://mxtoolbox.com/) to diagnose mail configuration issues and found guidance for the correct syntax for an SPF record for multiple providers. Fixed it, tested the yax.com welcome email and behold! It wasn’t sent to the spam folder.

### Add live chat to yax.com
I’ve been using the [Crisp](https://crisp.chat/en/) live chat service on my danielkehoe.com personal website and it’s a great way for visitors to get in touch with me. If someone messages from the live chat window on the website, I get an alert on my iPhone and can converse using the Crisp app on my phone. The email provider Sendinblue offers a live chat feature that integrates with their email contact lists but there’s no phone app so I’ll just use Crisp for now. Just took me a few minutes to paste the Crisp JavaScript code into the Hugo template file, push to GitHub and see an immediate deploy of the site on Netlify. I want to engage with visitors to the yax.com site so I hope live chat will make that easy.

## May 4, 2020

### Add a 404 page to yax.com
Right now, visitors can sign up on the yax.com landing page and get a welcome email. But the welcome email contains links to pages I haven’t built yet. So I need a 404 page. “404” is the official HTTP error code for “page not found.” The Hugo template provides one but I updated it to add the Crisp live chat so I can engage directly with visitors who encounter the 404 page.

## May 5, 2020

A day for errands in Denpasar

## May 6, 2020

### Retrospective
Did a retrospective and began compiling my daily notes into this worklog.

## May 7, 2020

A day for errands in Denpasar

## May 8, 2020

### Google Ads
In the past I’ve used Google Adwords to investigate what search terms are relevant to new projects. I’ll see what I learn with a single ad using a few keywords. I haven’t been a Google Ads user since it was Adwords ten years ago and the interface has changed a lot. It used to be complicated and now it’s extra complicated. Looks like it’s even easier to carelessly waste hundreds or thousands of dollars. I set a low budget and short duration for the campaign. Mostly just to get familiar with Google Ads again. 

## May 9, 2020

### Configure Google Analytics
I configured Google Analytics to integrate with Google Ads. Not sure if it’s working as it’s been a day already and my Google Ads are not yet approved. Also I went down a rabbit hole trying to link Google Analytics with Google Search Console so I can see what search terms people are using to find my site. Apparently a bottomless rabbit hole as you can’t link Google Analytics with Google Search Console unless you’ve verified your site ownership using a “URL prefix” method. I used a “Domain name provider” method and there doesn’t seem to be a way to backtrack and use the “URL prefix” method. Google recently released a new version of Search Console and apparently hasn’t updated its help pages. Really this is the continued devolution of the web into increasing complexity and specialization.

## May 10, 2020
I completed my retrospective and published the worklog.

## May 11, 2020

A day for errands in Denpasar

## May 12, 2020

A day for errands in Denpasar

## May 13, 2020

Moved to a new villa

## May 14, 2020

### Learned about Deno and Sourcebit
Read about Deno (an alternative to Node) and Stackbit’s Sourcebit project.

## May 15, 2020

### Learned about Bulma and Hugo
I took a look at how the “Bulma for Hugo” theme integrates Bulma with Hugo. I saw that Bulma CSS can be customized but it requires setting up Node to run a Sass compiler. I found a [bulma-start](https://github.com/jgthms/bulma-start) project that provides a simple example.

## May 16, 2020

### Installed XCode Command Line Tools
I wanted to learn about customizing Bulma CSS which requires installation of Node for running a Sass compiler. NPM (the Node Package Manager) requires Apple XCode Command Line Tools for compiling native add-on modules for Node (using node-gyp). I had the XCode CLT installed but after updating to macOS Catalina, XCode CLT was broken. I removed the older version and installed the latest version. I got NPM working properly. Then I took time to update my article at [install-rails-mac.com](https://install-rails-mac.com/) with what I learned about installing XCode CLT on macOS Catalina.

## May 17, 2020

### Learned about customizing Bulma
I looked at using the [Bulma-Extensions project](https://wikiki.github.io/) to add components to the yax.com website. Investigated setting up custom CSS for Bulma with Node. I tried setting up the Bulma-Extensions calendar component but got stuck integrating the required JavaScript using Node. Realized I didn’t need Bulma custom CSS or JavaScript for the comparison table I’m going to add to the yax.com site. So I just spent several days on an unnecessary detour.

## May 18, 2020

### Set up a comparison page
I added a static page to the Hugo project for yax.com. Learned how to add an HTML page that incorporates Hugo partials. And how to add a menu item for the new page. I used a pricing table from the [Bulma-Extensions project](https://wikiki.github.io/) as a base component for the comparison table. There’s no content yet for the comparison. I’ll do some research and identify what people care about before adding content to the comparison table.

## May 19, 2020

### Read about tiny websites
Read today on Hacker News that [“Tiny websites are great”](https://news.ycombinator.com/item?id=23228904). Someone said there’s a need for a service that can:
* Host static content like Netlify or Neocities
* Allow you to register a domain
* Choose a template and enter content with basic markup

I’d say a choice of templates and on-page editing is more important since one can easily register a domain name and host on Netlify.

## May 20, 2020

### Looked at implementing a photo gallery in Mavo
My friend Dea owns a flower shop in Kuala Lumpur. Last year a web developer built a simple website for her using the Encanto Sites website builder. Last month she found out the web developer was gone and Encanto Sites was shutting down its hosting service. I helped Dea recover her website files and set up the site on Netlify for free hosting. This week she told me she wanted to update her gallery of photos of bouquets. She wants to make simple updates to her site without learning to use a website builder or hiring a web developer. That’s a key pain point I want to address with the Yax project. Updating a simple web page should not require hiring a web developer or relying on a proprietary service that can go out of business. I took a look at [Mavo](https://mavo.io/), an extension to standard HTML that enables on-page editing of web pages. It’s a research project from Lea Verou at the MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL). I tinkered with a photo gallery example. It’s interesting but I encountered some issues (photos didn’t appear after uploading, perhaps because of some permissions issues).

## May 21, 2020

### Implemented an editable website with Mavo
I decided to explore building website templates that include Mavo for on-page editing so a Yax user will have no need for a website builder application. I built a simple website using a [classless CSS stylesheet](https://www.cssbed.com/) and added Mavo. Nice! Log in using a GitHub account, edit the page in the browser, and versioned changes get saved to a GitHub repository. The HTML head data (title and meta tags) can’t be edited from within the browser so I need to find an easy way to customize the template when forking it from GitHub. I posted a question to the GitHub API Development and Support Forum to get some guidance (Stack Overflow doesn’t have many answers for questions about the GitHub API).

[Previous: Worklog for April 2020]({{< ref "/posts/worklog-april-2020.md" >}})

