if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('now', new Date());

  Template.hello.helpers({
    now: function () {
      return Session.get('now');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('now', new Date());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
