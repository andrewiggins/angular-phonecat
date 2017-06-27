// tslint:disable:variable-name
describe('phoneList', () => {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(angular.mock.module('phoneList'));

  // Test the controller
  describe('PhoneListController', () => {
    let $httpBackend: ng.IHttpBackendService;
    let ctrl: PhoneListController;

    beforeEach(inject((
      $componentController: ng.IComponentControllerService,
      _$httpBackend_: ng.IHttpBackendService) => {

      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('app/phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('phoneList', {}) as PhoneListController;
    }));

    it('should create a `phones` property with 2 phones fetched with `$http`', () => {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phones).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}] as IPhone[]);
    });

    it('should set a default value for the `orderProp` property', () => {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
