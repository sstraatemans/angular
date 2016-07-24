import {home} from './home';
import {homeDirective} from './home.directive';
import template from './home.html';
import {HomeController} from './home.controller';

describe('Home', () => {


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

    it('should use controllerAs', () => {
      expect(ddo.controllerAs).to.be.a('string');
    });
  });
});
