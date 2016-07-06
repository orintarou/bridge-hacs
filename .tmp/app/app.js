'use strict';
angular.module('bridgehaCsApp', [
    'bridgehaCsApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map