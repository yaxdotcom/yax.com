+++
canonical_url = "https://yax.com/posts/worklog-april-2020/"
content_img_path = ""
date = 2020-04-30T16:00:00Z
excerpt = "April 28, 2020 was the first day of the Yax.com project."
layout = "post"
subtitle = ""
thumb_img_path = ""
title = "Worklog: April 2020"
description = "How we built Yax.com, starting in April 2020."
draft = false
categories = ["worklog"]
tags = ["worklog", ""]
author = "Daniel Kehoe" 

+++

# Yax.com Daily Worklog

Each day I summarize the work I’ve done to build Yax.com, describing both technical and business challenges.

In previous roles as a CTO or software engineering manager (see [my LinkedIn profile](https://www.linkedin.com/in/danielkehoe/)), I’ve encouraged my team to track technology design choices using [architecture decision records](https://github.com/joelparkerhenderson/architecture_decision_record) and an architecture decision log. This is similar; I also tell the bigger story about what I’m building and why.

## April 28, 2020

Today is the first day of the Yax.com project.

Here’s some context. I’m currently in Bali, recently resettled from Manila, in a villa with an office overlooking rice fields. Far away, beyond the rice fields, a worldwide pandemic rages. Hopefully in a few months we’ll look back and say the pandemic reached its peak this month and the risk and restrictions eased quickly. Right now I don’t know if there will be worse to come but it’s clear economic disruption and uncertainty will last for months. I’m not expecting I’ll be able to travel like I have in the last five years since I left the US. I’ve put my consulting work on hold. Recruiters are still calling but I don’t expect to start any new jobs soon. For me, this is a good time to start a new project that is speculative, exploratory, and intrinsically satisfying.

But what project? I’ve recently been thinking about the website builder market, partly as a result of helping family and friends with their simple websites and encountering limitations with the services people now use to build websites. I’ve also been reflecting on the early days of the web, recalling [the very first web browser](https://digital-archaeology.org/the-nexus-browser/) which had a capability to edit as well as view web pages.

My plan is to explore the market for a do-it-yourself website builder. Wix and Squarespace dominate the market and there are dozens of smaller competitors, so that suggests there is demand. I’ve seen the limitations imposed by Wix while helping my mother with her website, and encountered further difficulty helping a friend rescue her website from Encanto Sites, a website builder service that went out of business. I’ve built my personal website using a static site generator and helped my son build a website using Hugo, Forestry, and Netlify. The JAMstack approach I used with my son is superior to the commercial web site builder services because it produces websites that are free to build and host, without lock-in, but the approach is technically complex and not suitable for non-developers.

I’ve got some ideas about technology that will be similar to the very first web browser but I want to explore the dynamics of the website builder market first. I’ll dust off my yax.com domain name and offer some free tutorials to gauge interest in a JAMstack alternative to Wix and Squarespace. I’m thinking the tutorials can be a way to engage with users and explore what drives the market.

I know I need to think more about how to acquire and engage users. Before I can tackle that, I’ll need to build a rudimentary website. That’s my first task.

### Website requirements
The initial yax.com website requirements are simple. I want to display a chart comparing the JAMstack approach to Wix and other alternatives. I’ll need a sign-up form and drip email that delivers tutorials to subscribers. I’ll add live chat so I can engage with visitors. I’ll need a blog because I want to publish this journal. With those requirements in mind, I began building the website for yax.com.

### Choose a CSS framework and template
I started by looking for some appropriate templates for the website. In the past I’ve used templates from David Miller’s open source [StartBootstrap](https://startbootstrap.com/) project but the Bootstrap CSS framework is weighty and dated. I looked for templates built with newer CSS frameworks. The [Tailwind framework](https://tailwindcss.com/) and its UI components are getting a lot of developer interest but the component library is not yet fully built out and the license terms don’t allow template developers to use the framework, so Tailwind is not a contender. Next I looked at the [Bulma CSS](#) framework which gets a lot of love from developers. I found a template that suits my needs that is implemented with Bulma for the Hugo static site generator. There’s also a [Bulma UI component library](https://bulmatemplates.github.io/bulma-templates/) I can use to add sections such as tables to the template pages. In the past, I’ve used [Stackbit](https://www.stackbit.com/) to generate sites and deploy to Netlify but this time I set up Hugo and a GitHub repo directly. I don’t really like Hugo (the template system is cumbersome) but the [“Bulma for Hugo” template](https://themes.gohugo.io/bulma/) looks like a good starting point. It took me only a few minutes to install Hugo and begin making changes to the template.

## April 29, 2020

### Choose an email service provider
I’ve got the beginnings of a landing page for the website. The most important element will be a call to action (CTA) so I can engage with users. For this iteration, the CTA will be an email sign-up form. I’ll collect email addresses and save them to a contact list hosted by an email service provider. I used [Mailchimp](https://mailchimp.com/) for many years for my [RailsApps](https://github.com/RailsApps) open source project but Mailchimp becomes very expensive as the number of subscribers increase. With Mailchimp I paid more than $200 per month just to store the email addresses even when I wasn’t sending mail regularly. Today I looked for alternatives and found a provider named [Sendinblue](https://www.sendinblue.com/) that has no fee for storing a list of subscribers. Sendinblue charges a fee only when you send email to your subscribers.

### Integrate the Sendinblue sign-up form
Like Mailchimp or any other email service provider, Sendinblue has a form design interface that helps you create a subscription form. It’s available in three versions: IFrame code that embeds the form on your website, simple HTML code for a form without validation or confirmation messages, and a complex combination of HTML and JavaScript that performs validation and displays a success message. I expected I could simply copy the code and paste it into landing page. Instead I experienced a day of web developer pain. The iFrame worked but it was impossible to get the layout and styling to fit the design of my site. I tried the combination of HTML and JavaScript but the HTML alone was 68 lines of code and the JavaScript downloaded from Sendinblue was several thousand lines of code and encumbered the page loading with delays. So I put together a simple form with Bulma and started writing JavaScript AJAX to listen for the form submission event and submit the form. 

## April 30, 2020

### Integrate Sendinblue sign-up form
I spent a full day in hell just to write the JavaScript needed to submit email addresses to Sendinblue. Here’s the thing about JavaScript. It was a crappy language when it was first written. Over many years the Net gods have twisted it into a world-class modern programming language (so they say). But there’s at least three different ways to implement AJAX form submission. Ten years ago I would have used jQuery or maybe Axios. Then maybe a vanilla JavaScript implementation with `XMLHttpRequest`. More recently, there’s a new best practice using `fetch`. Here’s the thing about me. I don’t do JavaScript development every day or even very often. If I did, it’d take only a few minutes to slam together the code for form submission. As it is, I spent hours sorting through out-of-date tutorials before I found some examples for the current recommended approach. Professional JavaScript developers accept this state of affairs as normal. Which is why companies have to hire professional JavaScript developers. I don’t think web development should have devolved to this.

### Investigate web components
I’m not going to dive into it now but I want to see if some basic website features such as a sign-up form have already been implemented as reusable web components. I should be able to find a library of web components that includes a tag like `<email-signup-form>` and just drop it in, configuring the web component with the form submission target and applying styles of my CSS framework of choice. There should be no need to write one-off JavaScript for the same feature that thousands of people implement. Where are the web component libraries? There’s thousands of WordPress plugins or NPM packages. Web components should be the package manager for HTML, extending the language with reusable features so I don’t have to write JavaScript or adopt a heavy framework like React or Vue to get a library of useful components.

### First blog posts
I wanted some credible long-form content on the blog so I borrowed two essays from my [danielkehoe.com](https://danielkehoe.com/) personal website. Now I’ve got posts about the [Early Days of the Web](https://yax.com/posts/early-days-of-the-web-1991/) and a story from 1993 about [Punctuating the Web](https://yax.com/posts/personal-history-punctuating-the-web-1993/). It’s good to have some content in place so the first blog post isn’t titled “My First Blog Post.”

[Next: Worklog for May 2020]({{< ref "/posts/worklog-may-2020.md" >}})
