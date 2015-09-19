Router.route('/', {
    template: 'homepage'
});
Router.route('/profile', {
    template: 'profile'
});
Router.route('/match', {
    template: 'match'
});

if (Meteor.isClient) {

}


