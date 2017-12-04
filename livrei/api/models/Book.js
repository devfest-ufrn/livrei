/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    isbn : { type: 'string' },

    title : { type: 'string' },

    edition : { type: 'string' },

    editionYear : { type: 'int' },

    pages : { type: 'int' },

    publishingCompany : { type: 'string' },

    contribution : { type: 'string' },

    liked: {
      collection: 'Likes',
      via: 'bookreference'
    },

    userOwner: {
  		model: 'User',
  		via: 'books'
  	}

  }
};

