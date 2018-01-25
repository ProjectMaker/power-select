import Component from '@ember/component';
import { computed } from 'ember-decorators/object';
export default Component.extend({
  @computed('select')
    get value() {
      console.log(this.get('select'))
      return Ember.String.htmlSafe(this.get('option').replace(new RegExp(this.get('select.lastSearchedText'), 'i'), '<b>$&</b>'));
    }
});
