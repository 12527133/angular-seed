angular.module("app.directives").directive("menu",["$compile","$location",function(e,i){return{restrict:"A",replace:!0,scope:{menu:"="},template:'<ul><li ng-repeat="item in ::menu" menu-item="::item" ng-show="item.isNav==true"></li></ul>',link:function(e,i,n){i.on("click",function(){i.find(".dropdown-menu").hide()})}}}]).directive("menuItem",["$compile","$location","$state","$filter",function(e,i,n,t){return{restrict:"A",replace:!0,scope:{item:"=menuItem"},template:'<li ng-class="{dropdown:item.children&&item.children.length>0, active:$state.includes(item.href)}"></li>',link:function(i,o,r){i.$state=n,i.item.children&&t("filter")(i.item.children,{isNav:!0}).length>0?(o.append('<a ui-sref="{{::item.href}}">{{::item.title}}<i class="icon-downarrow"></i></a><div menu="::item.children" class="dropdown-menu"></div>'),o.on("mouseenter",function(){o.find("> .dropdown-menu").show()}).on("mouseleave",function(){o.find("> .dropdown-menu").hide()})):o.append('<a ui-sref="{{::item.href}}">{{::item.title}}</a>'),e(o.contents())(i)}}}]);