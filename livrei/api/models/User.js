/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username : { type: 'string' },

    email : { 
        type: 'string',
        unique: true
    },

    password : { type: 'string' },

    phone : { type: 'int' },

    books: {
    	collection: 'Book',
    	via: 'userOwner'
    },

    booksLikes : { 
    	collection: 'Likes'
    },

    exchanges: { collection: 'Exchange' }
  }
};

