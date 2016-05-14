/*
 * 2016-05-14 by happen
 * set star
 */

angular.module('app')
  .directive('myStar', function() {
    return {
      restrict: 'EA',
      template: '<ul class="stars" ng-init="">' +
        '<li ng-class="{active:chioceStarLevel>=($index+1)}" ng-repeat="item in selectItems" ng-click="selectStar($index+1);"></li>' +
        '</ul>',
      require: '?ngModel',
      replace: true,
      scope: {
        myClick: '&'
      },
      link: function(scope, elem, attrs, ctrl) {
        scope.chioceStar = 0;
        ctrl.$render = function() {
          var value = ctrl.$viewValue;
          if (value) {
            scope.chioceStarLevel = value;
          } else {
            scope.chioceStarLevel = 0;
          }
        };

        scope.selectItems = [];
        scope.maxCount = (attrs.maxCount === void 0 ? 5 : attrs.maxCount);
        for (var i = scope.maxCount - 1; i >= 0; i--) {
          scope.selectItems.push({});
        }

        scope.selectStar = function(level) {
          if (attrs.readonly === void 0) {
            if (attrs.require === void 0) {
              if (scope.chioceStarLevel === level) {
                scope.chioceStarLevel = 0;
              } else {
                scope.chioceStarLevel = level;
              }
            } else {
              scope.chioceStarLevel = level;
            }
            if (attrs.myClick !== void 0) {
              scope.myClick();
            }
          }
        };

        scope.$watch('chioceStarLevel', function() {
          ctrl.$setViewValue(scope.chioceStarLevel);
        });

      }
    }
  });
