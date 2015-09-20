Router.route('/', {
    template: 'homepage'
});
Router.route('/profile', {
    template: 'profile'
});
Router.route('/match', {
    template: 'match'
});

Users = new Mongo.Collection('tags');

if (Meteor.isClient) {
  
}


