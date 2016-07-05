[trello]: https://trello.com/whatever
[build-page]: https://semaphoreci.com/subvisual/hipaa
[production]: https://link.to.production/
[staging]: https://svhipaa.herokuapp.com/form/1

Are you HIPPA?
==============

* [Build Page][build-page]
* [Staging][staging]

**Are you HIPPA?** is a tool to help developers the entrepreneurs understand if an application is HIPAA compliant. HIPAA stands for Health Insurance Portability and Accountability Act. The goal of this law is to ensure confidentiality and security of healthcare information.

HIPAA is long and complex, and most small businesses cannot afford a legal team. **Are you HIPPA?** is a survey that determine if an applicatin is HIPAA compliant and provides information on what steps to take to make it.

**Table of Contents**

* [Setup](#setup)
* [Development](#development)
* [Deployment](#deployment)
* [More Sections](#more-sections)
* [Contribution Guidelines](#contribution-guidelines)
* [Resources](#resources)
* [Contacts](#contacts)

Setup
-----

A set of instructions to install the project. It can start with a list of dependencies, like databases, and finish with the instructions, or it can be a simple list of commands. For instance:

First, clone & setup the repository:

```
git clone git@github.com:subvisual/hipaa.git
cd hipaa
bin/setup
```

Development
-----------

To start your development environment run:

```
bin/server
```

This will start the node application.

```
npm run build
```

Deployment
----------

There are automatic deploys for the master branch. If you need to update manually, push the code to `https://git.heroku.com/svhipaa.git`.

Express Server
-------------

In production, the file `index.js` is run to start an express application. Express serves the static asssets and renders `index.html` to any other request. It is necessary because this application is a SPA and has routing. The meanes that when you navigate to `/form/1` there is no `/form/1.html` but `index.html` will start the React application and display the correct information. This is also the reason we are not using Github Pages.

Contribution Guidelines
-----------------------

Contributions must follow [Subvisual's guides](https://github.com/subvisual/guides).

Resources
---------

This section should list every online resource that is relevante to the project. For instance:

* [zeplin](https://app.zeplin.io/project.html#pid=5722325da329ab5e35791fab&dashboard&tags=svhealth)

About
-----

ProjectName is maintained by [Subvisual](http://subvisual.co).

[![Subvisual](https://raw.githubusercontent.com/subvisual/guides/master/github/templates/subvisual_logo_with_name.png)](http://subvisual.co)

If you need to contact the maintainer use [this](https://trello.com/b/svB6ZSce/areas-of-responsability-dris) trello board, or <a href="mailto:contact@subvisual.co">reach out to us</a> if you don't have access.
