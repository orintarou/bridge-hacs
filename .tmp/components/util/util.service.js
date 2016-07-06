'use strict';
(function () {
    function UtilService($window) {
        var Util = {
            safeCb: function (cb) {
                return (angular.isFunction(cb)) ? cb : angular.noop;
            },
            urlParse: function (url) {
                var a = document.createElement('a');
                a.href = url;
                if (a.host === '') {
                    a.href = a.href;
                }
                return a;
            },
            isSameOrigin: function (url, origins) {
                url = Util.urlParse(url);
                origins = (origins && [].concat(origins)) || [];
                origins = origins.map(Util.urlParse);
                origins.push($window.location);
                origins = origins.filter(function (o) {
                    var hostnameCheck = url.hostname === o.hostname;
                    var protocolCheck = url.protocol === o.protocol;
                    var portCheck = url.port === o.port || (o.port === '' && (url.port === '80' || url.port === '443'));
                    return hostnameCheck && protocolCheck && portCheck;
                });
                return origins.length >= 1;
            }
        };
        return Util;
    }
    angular.module('bridgehaCsApp.util')
        .factory('Util', UtilService);
})();
//# sourceMappingURL=util.service.js.map