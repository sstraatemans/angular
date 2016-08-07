import {CharactersController as controller} from './characters.controller';
import template from './characters.html';

export const charactersDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
