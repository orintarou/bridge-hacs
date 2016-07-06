'use strict';
angular.module('bridgehaCsApp.auth', [
    'bridgehaCsApp.constants',
    'bridgehaCsApp.util',
    'ngCookies',
    'ngRoute'
])
    .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map