import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('product');
  },
  actions: {
     saveProduct3(product,params) {
       var newProduct = this.store.createRecord('product', params);
       newProduct.save();
       this.transitionTo('index');
     }
   }

});
