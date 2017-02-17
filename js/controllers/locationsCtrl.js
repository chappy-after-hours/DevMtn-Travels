angular.module('devmtnTravel')
  .controller('locationsCtrl',function($scope, mainSrv){
    $scope.travelInfo = mainSrv.travelInfo;
    console.log($scope.travelInfo)
  })
