class PhoneListController implements ng.IController {

  public static $inject: string[] = ['Phone'];

  public phones: IPhone[];

  public orderProp: string;

  constructor(Phone: PhoneResource) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: PhoneListController
  });
