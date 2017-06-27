// Register `phoneDetail` component, along with its associated controller and template
class PhoneDetailController implements ng.IController {

  public static $inject: string[] = ['$routeParams', 'Phone'];

  public mainImageUrl: string;

  public phone: IPhone;

  constructor($routeParams: ng.route.IRouteParamsService, Phone: PhoneResource) {
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone: IPhone) => {
      this.setImage(phone.images[0]);
    });
  }

  public setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
