import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});


FlowRouter.route('/user_profile', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.route('/user_home', {
  name: 'User_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Home_Page' });
  },
});

FlowRouter.route('/events', {
  name: 'Events_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Events_Page' });
  },
});

FlowRouter.route('/list_item', {
  name: 'List_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Item_Page' });
  },
});

FlowRouter.route('/create_item', {
  name: 'Create_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Item_Page' });
  },
});

FlowRouter.route('/promoter', {
  name: 'Promoters_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Promoters_Page' });
  },
});

FlowRouter.route('/user_profile', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
