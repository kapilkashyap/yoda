# yoda
A basic HTTP server made using NodeJS which is light weight, has a small footprint yet is powerful.

Usually, you would build a Node application and use a Node framework like [Express JS](https://github.com/expressjs/express) to build and configure a server to serve that application. It is a one-one mapping, one application, one server. On the contrary **yoda** is a simple HTTP webserver which allows you to host multiple front-end applications :slightly_smiling_face:

#### Prerequisite
* [Node.js](https://nodejs.org/en/download/) (mandatory)
* [Git](https://git-scm.com/downloads) (optional)

#### How to install
You can either clone the repository or download the archive and unzip it

#### Will I need to build
Nope! This application does not have any npm dependencies and is ready to use OOTB

#### How to use
Open your favourite CLI pointing to the root of the application and execute
`node .\server.js`

#### Who should use this
Anyone trying to make a front-end application (ReactJS/Angular/HTML/CSS/JS/JSON/Images)

#### Where to deploy applications
By default, you can create/deploy your application under **webapps** directory. However, this can be changed in the config.json

#### Configurations
Property | Default
-------- | -------
host | localhost
port | 3333
base | /webapps
imageTypeExtensions | Array of various type extensions for image files that are allowed to be served

#### Why to use
It's quick, simple and lite weight :wink:

#### License
MIT Licensed

Copyright (C) 2020 Kapil Kashyap
