import {charactersDirective} from './characters.directive';
import angular from 'angular';


export const characters = angular.module('characters', [])

  .directive('characters', charactersDirective);
