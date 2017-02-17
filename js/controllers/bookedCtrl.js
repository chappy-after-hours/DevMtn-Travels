angular.module('devmtnTravel')
  .controller('bookedCtrl', function($scope,mainSrv, $stateParams){
    $scope.travelInfo = mainSrv.travelInfo;
    var func = function () {
      for (var i = 0; i < $scope.travelInfo.length; i++) {
        // console.log(typeof $stateParams.id, typeof $scope.travelInfo[i].id)
        if ($stateParams.id == $scope.travelInfo[i].id) {
            return $scope.travelInfo[i];
        }
      }
    }
    $scope.info = func();
  })
