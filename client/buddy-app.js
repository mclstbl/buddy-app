Router.route('/', {
    template: 'homepage'
});
Router.route('/profile', {
    template: 'profile'
});
Router.route('/match', {
    template: 'match'
});
Router.route('/signup', {
    template: 'signup'
});

if (Meteor.isClient) {

}


