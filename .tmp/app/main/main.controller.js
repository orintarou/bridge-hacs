'use strict';
(function () {
    var MainController = (function () {
        function MainController($http) {
            this.$http = $http;
            this.awesomeThings = [];
        }
        MainController.prototype.$onInit = function () {
            var _this = this;
            this.$http.get('/api/things').then(function (response) {
                _this.awesomeThings = response.data;
            });
        };
        MainController.prototype.addThing = function () {
            if (this.newThing) {
                this.$http.post('/api/things', { name: this.newThing });
                this.newThing = '';
            }
        };
        MainController.prototype.deleteThing = function (thing) {
            this.$http.delete('/api/things/' + thing._id);
        };
        return MainController;
    }());
    angular.module('bridgehaCsApp')
        .component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController
    });
})();
//# sourceMappingURL=main.controller.js.map