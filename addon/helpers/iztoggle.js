import Ember from 'ember';

export function toggle([prop, obj]) {
  return function(){
    obj.toggleProperty[prop]; 
  }
}

export default Ember.Helper.helper(toggle);
