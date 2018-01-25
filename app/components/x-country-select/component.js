import Component from '@ember/component';
import { action } from 'ember-decorators/object';

export default class CountriesListComponent extends Component {
  names = ['John Doa', 'John doe', 'Tomster', 'Pluto']
  destination = ''

  @action
  foo(country, options) {
    this.set('destination', country)
  }

  @action
  onfocus() {
    console.log('ooooo')
  }
}
