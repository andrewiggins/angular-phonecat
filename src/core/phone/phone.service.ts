type PhoneResourceFactory = ng.resource.IResourceServiceFactoryFunction<IPhone>;
type PhoneResource = ng.resource.IResourceClass<IPhone>;

const phoneFactory: PhoneResourceFactory = ($resource: ng.resource.IResourceService) =>
  $resource<IPhone>('app/phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  });

phoneFactory.$inject = ['$resource'];

angular.
  module('core.phone').
  factory('Phone', phoneFactory);
