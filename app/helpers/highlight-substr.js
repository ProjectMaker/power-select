import { helper } from '@ember/component/helper';

export function highlightSubstr([text, termToHighlight]) {
  console.log('ooo', text)
  return Ember.String.htmlSafe(text.replace(new RegExp(termToHighlight, 'i'), '<b>$&</b>'));
}

export default helper(highlightSubstr);
