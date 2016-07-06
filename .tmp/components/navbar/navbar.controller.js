'use strict';
var NavbarController = (function () {
    function NavbarController($location) {
        this.menu = [{
                'title': 'Home',
                'link': '/'
            }];
        this.isCollapsed = true;
        this.$location = $location;
    }
    NavbarController.prototype.isActive = function (route) {
        return route === this.$location.path();
    };
    return NavbarController;
}());
angular.module('bridgehaCsApp')
    .controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map