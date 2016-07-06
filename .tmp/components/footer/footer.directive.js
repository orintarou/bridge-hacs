'use strict';
angular.module('bridgehaCsApp')
    .directive('footer', function () {
    return {
        templateUrl: 'components/footer/footer.html',
        restrict: 'E',
        link: function (scope, element) {
            element.addClass('footer');
        }
    };
});
//# sourceMappingURL=footer.directive.js.map