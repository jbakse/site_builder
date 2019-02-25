---
title: Multiuser Webpage
layout: layouts/compform_chapter.pug
debug: false

header_title: Multiuser Webpage
previous: false
previous_url: false
next: false
next_url: false

hero_title: Multiuser Webpage
description: Build a very simple multiuser web app with a back-end powered by node.js and express and communication powered by socket.io.
software: Node, Express, Socket IO, Heroku
---

## Afterclass Live-Code, Multiuser Webpage

_February 22, 2019_

In this afterclass Live-Code I built a very simple multiuser web app with a back-end powered by node.js and express.js and communication powered by socket.io. The webpage tracks and shared the postion of each user's mouse. The actual code from class is not available online, but a cleaned up version is on github.

::: .aspect-2-1

<iframe class="js-lab" style="position: absolute; top: 0;" src="https://multiuserpage.herokuapp.com/"></iframe>

/::

Final Product: [https://multiuserpage.herokuapp.com/](https://multiuserpage.herokuapp.com/)

Source Code: [https://github.com/jbakse/multi_user_page](https://github.com/jbakse/multi_user_page)

## Topics Discussed

- Basic Client-Server App Architecture

  - What information needs to be shared?
  - How should that information be communicated?
  - How much should the application trust the client?

- [Isomorphic Javascript](https://en.wikipedia.org/wiki/Isomorphic_JavaScript)
- Setting up a Node.js Project
- Building a simple static web server with Express.js
- Client-server communication with Socket.io
- Debugging with `console.log`

## Tools Discussed

### Node.js

Serverside JavaScript runtime.

[Homepage](https://nodejs.org/)

### NPM

The Node Package Manager, used to install and manage javascript libraries and tools

[homepage](https://npm.org/)

### Nodemon

Relaunches a Node applicatoin when source is changed.

[Homepage](https://nodemon.io/)

### Heroku

Platform as a Service application host.

[Homepage](https://www.heroku.com/)

### Socket.io

Library for socket communication.

[Homepage](https://socket.io/)

### Express.js

Popular Node.js library for building a web server.

[Homepage](https://expressjs.com/)
