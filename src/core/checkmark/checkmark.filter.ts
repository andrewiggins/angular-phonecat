type checkmarkFilter = (input: boolean) => string;
const checkmarkFilter: checkmarkFilter = (input: boolean) => input ? '\u2713' : '\u2718';

angular.
  module('core').
  filter('checkmark', () => checkmarkFilter);
