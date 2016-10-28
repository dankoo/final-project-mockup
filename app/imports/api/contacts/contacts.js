import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const events = new Mongo.Collection('events');

/**
 * Create the schema for Stuff
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'event',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'price',
    type: Number,
    optional: false,
    max: 200,
  },
  address: {
    label: 'Email',
    type: String,
    optional: false,
    max: 200,
  },
  telephone: {
    label: 'telephone',
    type: String,
    optional: false,
    max: 200,
  },
});

Contacts.attachSchema(ContactsSchema);
