/**
 * Exchange.js
 *
 * @description :: Informações sobre a troca. 
 * user - usuário com quem foi feita a troca.
 * book - Livro do usuário que foi feita a troca.
 * done - Se a troca foi efetivada ou não.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
    user: { model: 'User'},

    book: { model: 'Book' },

    done : { type: 'boolean' }
  }
};

