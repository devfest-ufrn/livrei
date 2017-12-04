/**
 * Likes.js
 *
 * @description :: Informação sobre o like
 * book - Livro que o usuário deu like
 * user - Dono do livro que o usuário deu like
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    bookreference: { 
    	model: 'Book',
    	via: 'liked'
    },

    user: { 
    	model: 'User'
    }
  }
};

