+++
canonical_url = "https://yax.com/posts/worklog-june-2020/"
content_img_path = ""
date = 2020-06-21T16:00:00Z
excerpt = "A day by day description of the technical and business challenges building Yax.com."
layout = "post"
subtitle = ""
thumb_img_path = ""
title = "Worklog: June 2020"
description = "How I built Yax.com. The worklog from June 2020."
draft = false
categories = ["worklog"]
tags = ["worklog", ""]
author = "Daniel Kehoe" 

+++

# Yax.com Daily Worklog

Each day I summarize the work I’ve done to build Yax.com, describing both technical and business challenges.

## June 1, 2020

### Building a Template Gallery
I found an example of a gallery using [Bulma CSS with modal cards](https://bulmatemplates.github.io/bulma-templates/templates/modal-cards.html). I also found a [Bulma form builder](https://jesobreira.github.io/Bulma-Form-Builder/). I created a gallery of templates (actually just one template for now). Clicking a template opens a modal that contains a form with fields for project name, website name, and description. Clicking a “Deploy Now” button submits an HTTP POST request to the Vercel function, which takes the form parameters and retrieves template files, modifies files, and saves the selected template to a GitHub repository. I’m excited to see this. It’s the full functionality (in skeleton form) that I need for Yax. With this feature, creating a website can be as simple as browsing a template gallery, selecting a template, and seeing a website deploy.

## June 2, 2020

### GitHub Authentication
I can programmatically create a website project in my own GitHub account. I started implementing GitHub OAuth Authentication so Yax users can create websites in their own Github accounts. OAuth authentication is difficult to implement. In my experience, it takes a few days of work, even for an experienced developer. Today I used [Dark](https://darklang.com/) to prototype the GitHub authentication web flow so I’m familiar with each step.

## June 3, 2020

### GitHub Authentication
I want to create a one-step process for selecting a Yax website template, authenticating the user with GitHub, and saving the website project to the user’s GitHub account. The standard GitHub authentication workflow expects the user to authenticate on the GitHub site and then return to a web application using a supplied redirect URL. At first, it looked like any data from a form submission would be lost during the authentication flow. I noticed that the GitHub authentication API can accommodate a `state` parameter that is passed onward in the callback request. So I hacked together some JavaScript that captures the form data and transforms it into an encoded string that is appended to the authentication HTTP GET request as the `state` parameter. Seems to work as I prototype it in Dark.

## June 4, 2020

### GitHub Authentication
I can initiate the GitHub authentication by clicking a simple link or button on a yax.com web page. But the link doesn’t contain the `state` parameter I need to pass to the Yax API endpoint. I tried initiating the HTTP GET request from JavaScript using `fetch` with the  `state` parameter in the query string. That doesn’t work because I get a CORS error. Thought about it some more and realized I don’t need to use `fetch` because I’m not trying to get back any data. Instead I can just use JavaScript `window.open(url, "_self")` with a URL that contains the `state` parameter in the query string. Works nicely.  

## June 5, 2020

### Yax API Endpoint
Until now I was just prototyping the interaction between the Yax template gallery and the Yax API endpoint using Dark. Today I switched the URL to use the Yax API endpoint running as a Ruby function on Vercel. With what I learned during prototyping I quickly updated the Vercel `deploy.rb` function to receive a form submission from the Yax template gallery, complete GitHub user authentication, create a repo and write a file to the repo.

### Yax Template Gallery
I improved the user experience by adding a pageloader to the template gallery page (the alternative would be a progress bar or spinner icon). I used a [Bulma extension](https://github.com/Wikiki/bulma-pageloader) which places a page loader overlay on the whole page after the user submits the template form.

## June 6, 2020

### Deploy a Website with Netlify or Vercel
For building a website with Yax, the user story should be: Choose a website template from a gallery, submit a form with a website name and description, save the modified template to the user’s GitHub account, and deploy the website to a hosting service such as Netlify or Vercel. Today I took a look at the deploy step. Ideally the new hosted website would appear in the user’s browser at the completion of the process. I don’t think that’s possible. Instead, the user will see the README page from the template, which will contain deploy buttons for Netlify and Vercel. Both Netlify and Vercel provide deploy buttons. I tried setting up a Netlify Deploy button in the template README. It’s not quite ideal as Netlify insists on creating a duplicate repo in the user’s GitHub account. If the project is named “my-yax-website,” the user has to give the duplicate template a new name such as “my-yax-website-netlify.” It adds friction to the deployment process but Netlify doesn’t have an optimal solution for my use case (where I want to deploy the repo that contains the deploy button). I also set up a deploy button in the README for Vercel. It works the same as the Netlify deploy button. There’s a little friction during deployment (and potential for user confusion) but it’s still pretty cool to choose a template from a gallery and see it deployed as a website in less than a minute.

## June 7, 2020

### Yax Manifest File
So far, the Ruby function on Vercel only retrieves two files, a README and an index.html file. The function needs to retrieve all the website files that are needed for the template, including multiple HTML files, CSS files, images, and more. I’m not sure how to get a list of all the files in a GitHub repository so for now I’ll just read a manifest file and retrieve a list of files from the manifest. I’ll use the YAML file format and name the file `yax.yaml`. I added a YAML parser to the Vercel Ruby function and wrote a recursive method to iterate over a hash that contains strings and nested hashes to build a file list. Now I can retrieve all the files listed in the manifest, modify each as needed, and save the files to the user’s specified GitHub repository.

## June 8, 2020

### Testing Website Deployment
Did some testing and resolved an issue I had with Vercel giving me a “bad credentials” error when I deployed the websites. Now everything works to duplicate and deploy Yax templates that contain multiple files.

## June 9, 2020

### How to Build a Template Gallery?
I’ve prototyped selecting a single website template and deploying with Yax. Now I need to build one or more gallery pages with a curated collection of templates. Static site generators are typically used to build blogs but they can be used to build a repetitive pattern like a gallery as well. I’ve been using Hugo but I really don’t like it. It’s fast to generate websites but I don’t like the templating language (templating provided by the Go language). And the layers of overriding template files is confusing. It’s just too complex for my tastes (and my current need). I looked at Zola. It’s built in Rust and has a cleaner templating system and no tooling required (just download a binary) but it’s not very popular. I decided to try Eleventy (a JavaScript-based static site generator) because it’s very popular. It uses the popular Nunjucks (from Mozilla) for a template language and it can construct repetitive page elements from data files so it is suitable for a template gallery.

## June 10, 2020

### Trying Out Eleventy
I got Eleventy set up and working using the HTML files I already created for the yax.com site. It requires an ugly JavaScript configuration file full of curly braces. Plus it requires NPM as a build tool that creates a `node-modules` directory with 163MB of dependencies (otherwise known as cursed hellspawn). The next step is to use the Nunjucks template language to set up a base layout page pulling in a header and footer as “partials” or “includes.” This is such a basic function I really wish it was part of the HTML specification from the dawn of the web. We’ve been solving this problem (DRY or “don’t repeat yourself” HTML code) with Dreamweaver and PHP and fuck all since 1991. Looked at Nunjucks and it’s a hell of curly braces. Really, haven’t we solved this problem yet. I don’t want to offer Yax templates to do-it-yourself webmasters that require a build process (and brittle tooling) and contain HTML files polluted with weird  template languages. I don’t want to inflict this on neophyte Yax users and I don’t want to inflict it on myself. I’ll look at using web components to DRY up my HTML.

## June 11, 2020

### Learning About Web Components
Started learning about web components. I like the idea that web components don’t break the declarative nature of HTML. Web components just add custom HTML tags you create yourself (or get from a library), loaded on a page using some JavaScript. Mostly I’ve heard they are useful for “design systems” which is something (in my experience) that only very senior frontend developers worry about. I thought about the reasons design systems are recommended (consistency, maintainability, reusability). Really, when you want to DRY up HTML for standardized layouts and consistency of elements along web pages, that’s a design system. So as soon as you want to reuse a footer across multiple webpages, that’s a design system. We’ve been struggling with a need for that since 1991.

## June 12, 2020

### Learning About Web Components
To learn about web components, I started with these Awesome lists:

* [Awesome: Web Components the Right Way](https://project-awesome.org/mateusortiz/webcomponents-the-right-way)
* [Awesome Web Components](https://github.com/obetomuniz/awesome-webcomponents)

Also, after I learned that lit-html is popular, I found great resources on the [Awesome lit-html](https://github.com/web-padawan/awesome-lit-html) repository.

I liked this quote from [Leon van Wijk](https://craftsmen.nl/polymer-is-dead-long-live-web-components/):

> The concept of Web Components promises a future where web applications are built without frameworks. Instead of frameworks, developers could stick to ‘vanilla’ JavaScript and use the Web API’s made available by the browser. 

## June 13, 2020

### Learning About Web Components
I read about the history of web components. Significantly, on January 15, 2020 Microsoft released a version of its Edge browser that is based on Google’s Chromium, assuring web components are now supported by all major browsers including Google Chrome, Safari, and Firefox. I also read about [All the Ways to Make a Web Component](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) and learned (as of June 2020) that there are 33 different ways to make a web component.

## June 14, 2020

### Learning About Web Components
I started examining web component libraries and looking at sample code that implements web components. Some large corporations have released open source versions of the web components they use across their websites ([AXA](https://github.com/axa-ch/patterns-library), [ING](https://medium.com/ing-blog/ing-open-sources-lion-a-library-for-performant-accessible-flexible-web-components-22ad165b1d3d), [SAP](https://sap.github.io/ui5-webcomponents/), [Pearson](https://ux.pearson.com/web-components/), [Adobe](https://opensource.adobe.com/spectrum-web-components/), [Salesforce](https://developer.salesforce.com/docs/component-library/overview/components)). It seems most of the web component libraries are documented with [Storybook](https://storybook.js.org/) which provides a UI for a collection of web components (but loads really slowly on my machine).

## June 15, 2020

### Learning About Web Components
I looked more closely at Google’s Lit-Html and Lit-Element ([released February 5, 2019](https://www.polymer-project.org/blog/2019-02-05-lit-element-and-lit-html-release)). It seems many of the newer web component libraries are based on Lit-Element. The [Open-WC](https://open-wc.org/index.html) project has documentation and guidance for building web components with Lit-Element.

## June 16, 2020

### Learning About Web Components
I looked at how to use web components to implement a gallery. Lit-Html supports templating with iteration, so elements like a photo or card can repeat, generated from data. This is what I need for a template gallery for yax.com. It’s great if I can do this without a static site generator. Just wondering if there’s better performance to use a static site generator or use web components that are populated from data.

## June 17, 2020

### Learning About Web Components
I looked for starter packages or generators to build web components. The [Open-WC](https://open-wc.org/index.html) project has a [scaffold generator](https://open-wc.org/init/) that will kickstart a new web component. The documentation makes some assumptions and has some gaps but the project is informative. I also looked at an interesting project from Abraham Williams named [Nutmeg](https://github.com/abraham/nutmeg) to “Build, test, and publish vanilla Web Components” but the installation instructions led to errors.

## June 18, 2020

### Learning About Web Components
I looked for a beginner’s tutorial for building web components with lit-html but all the tutorials I found were aimed at experienced front-end developers, so I started writing my own tutorial “Build a Web Component.”

## June 19, 2020

### Writing a Tutorial About Building a Web Component
I wrote sections “Create the Project”, “Add Html”, and “Add JavaScript” for my “Build a Web Component” tutorial.

## June 20, 2020

### Writing a Tutorial About Building a Web Component
I wrote a section “Try a One Page Demo” for my “Build a Web Component” tutorial. It’s great to be able to show how to build a web component with just a text editor and a browser. No need to install build tools or a framework!

## June 21, 2020

I updated and published the worklog for yax.com.


[Previous: Worklog for May 2020]({{< ref "/posts/worklog-may-2020.md" >}})
