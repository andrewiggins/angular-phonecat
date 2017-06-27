angular.
  module('phonecatApp').
  animation('.phone', () => {
    return {
      addClass: (element, className, done) => {
        if (className !== 'selected') {
          return;
        }

        element.css({
          display: 'block',
          position: 'absolute',
          top: 500,
          left: 0
        }).animate({
          top: 0
        }, done);

        return function animateInEnd(wasCanceled: boolean) {
          if (wasCanceled) {
            element.stop();
          }
        };
      },

      removeClass: (element, className, done) => {
        if (className !== 'selected') {
          return;
        }

        element.css({
          position: 'absolute',
          top: 0,
          left: 0
        }).animate({
          top: -500
        }, done);

        return function animateOutEnd(wasCanceled: boolean) {
          if (wasCanceled) {
            element.stop();
          }
        };
      }
    };
  });
