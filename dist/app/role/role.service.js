angular.module("app.role").factory("roleService",["$http","$q","$timeout",function(e,n,t){return{getRoleList:function(){return e({url:"api.test/role/list.json",method:"GET"})},add:function(e){var o=n.defer();return t(function(){o.resolve()},1e3),o.promise.success=function(e){o.promise.then(function(n){e(n)})},o.promise},edit:function(e,o){var r=n.defer();return t(function(){r.resolve()},500),r.promise.success=function(e){r.promise.then(function(n){e(n)})},r.promise}}}]);