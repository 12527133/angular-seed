angular.module("app.directives").directive("unique",["$q","$http","$timeout",function(e,r,i){return{restrict:"A",require:"ngModel",link:function(r,n,t,u){var c=(t.uniqueCheckUrl,t.uniqueCheckProperty);u.$asyncValidators.unique=function(r,n){if(u.$isEmpty(r))return e.when();var t=e.defer(),o={};return o[c]=r,i(function(){["123@a.com","abc@a.com"].indexOf(r)>-1?t.reject():t.resolve()},1e3),t.promise}}}}]);