import {appDirective} from './app.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {home} from './components/home/home';
import {characters} from './components/characters/characters';
import {services} from './services/services';

angular.module('app', [
  uiRouter,
  ngAnimate,
  services.name,
  home.name,
  characters.name
])
.directive('app', appDirective);
