/*
 * 2016-05-14 by happen
 */

angular.module('app')
  .controller('starCtrl', function($scope) {
    var _test = function() {
      console.log('chioce');
    };

    var init = function() {
      $scope.maxCount = 5;
      $scope.starLevel = 3;
      $scope.test = _test;
    };
    init();
  });
