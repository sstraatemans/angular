import {charactersService} from './charactersService';
import angular from 'angular';

export const services = angular.module('shared', [])
  .factory('CharactersService', charactersService);
