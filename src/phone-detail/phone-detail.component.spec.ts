// tslint:disable:variable-name
describe('phoneDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(angular.mock.module('phoneDetail'));

  // Test the controller
  describe('PhoneDetailController', function() {
    let $httpBackend: ng.IHttpBackendService;
    let ctrl: PhoneDetailController;
    const xyzPhoneData: any = {
      name: 'phone xyz',
      images: ['app/image/url1.png', 'app/image/url2.png']
    };

    beforeEach(inject((
      $componentController: ng.IComponentControllerService,
      _$httpBackend_: ng.IHttpBackendService,
      $routeParams: ng.route.IRouteParamsService) => {

      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('app/phones/xyz.json').respond(xyzPhoneData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('phoneDetail', {}) as PhoneDetailController;
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phone).toEqual({} as any);

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });

  });

});
