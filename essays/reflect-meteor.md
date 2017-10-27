---
layout: essay
type: essay
title: Code Smart
date: 2017-10-26
labels:
  - Meteor
  - JavaScript
  - Semantic UI
  - HTML
---
# The Power of a Web framework
Meteor is a heavyweight web framework that handles the complexities of web development on both the front end and back end. While Meteor is a JavaScript framework, it completely transforms the web development process from simple HTML, CSS, and JavaScript into an entity of its own. Take a simple table body entry:

```
{% raw %}
<tbody>
{{#each contact in contactsList}}
  <tr>
    <td>{{contact.first}}</td>
    <td>{{contact.last}}</td>
    <td>{{contact.address}}</td>
    <td>{{contact.telephone}}</td>
    <td>{{contact.email}}</td>
    <td><a href="{{pathFor 'Edit_Contact_Page' _id=contact._id}}">Edit</a></td>
  </tr>
{{/each}}
</tbody>
{% endraw %}
```

Meteor provides its own built in reactive HTML templates in the form of BlazeJS. Tools such as BlazeJS allow concise powerful constructs to be quickly utilized within our application without needing to construct complicated JavaScript functions to handle this behavior. Now we take a look at the JavaScript that utilizes this HTML template:

```
Template.Add_Contact_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ContactsSchema.namedContext('Add_Contact_Page');
});
```

Through Meteor, we can quickly develop our web application without worrying about the technicalities of web development, instead we spend more time creating meaningful constructs in our application.

# The Learning Curve of a Framework
Meteor at its core is a framework that simplifies the web development process for a developer in the long run. However, for the developer this is not apparent early on when utilizing Meteor in fact its nearly the complete opposite. By changing the usual relationship between HTML, CSS, and JavaScript for the application, the developer needs to relearn how to build the application the Meteor way. For example, the routing of pages is handled by the FlowRouter turning href into an obsolete construct. Furthermore, BlazeJS completely controls the way web pages are displayed utilizing templates for all portions of the web page. The plethora of tools that Meteor allows is at first overwhelming, especially since these are not simple programmatic constructs, these are constructs that allow scalability to web applications. Unlike learning a new programming language, the tools Meteor brings are various APIs brought together that for a developer with little prior web development experience, can be overwhelming at first.

# Saving Time in the Long Run
Learning Meteor can be daunting at first but the time spent learning the framework will be well spent in the end. Syncing data between the client and server can be a daunting task full of programmatic and security issues if not implemented correctly. By utilizing a well-tested open source framework like Meteor, more time will be spent on developing the application in a meaningful way, adding features and styling content over fixing fundamental flaws in the architecture of the application.
