import {home} from './home';
import {homeDirective} from './home.directive';
import template from './home.html';
import {HomeController} from './home.controller';

describe('Home', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(home.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(home.name).to.equal('home');
    });
  });

  describe('directive', ()=> {
    let ddo;
    beforeEach(() => {
      ddo = homeDirective();
    });

    it('should have the right template', () => {
      expect(ddo.template).to.equal(template);
    });

    it('should have the right controller', () => {
      expect(ddo.controller).to.equal(HomeController);
    });

    it('should have an isolate scope', () => {
      expect(ddo.scope).to.be.an('object');
    });

    it('should use controllerAs', () => {
      expect(ddo.controllerAs).to.be.a('string');
    });
  });


  describe('template', ()=> {

  });
});
