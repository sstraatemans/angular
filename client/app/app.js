import {appDirective} from './app.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  ngAnimate,
  home.name
])
.directive('app', appDirective);
