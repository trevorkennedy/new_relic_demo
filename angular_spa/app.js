// Code goes here
var app = angular.module('computer',['ngRoute']);


app.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/',{
    templateUrl: 'layouts/main.html',
   controller: 'MainCtrl'
  })
   .when('/index',{
    templateUrl: 'layouts/main.html',
   controller: 'MainCtrl'
  })
  .when('/services',{
    templateUrl: 'layouts/services.html',
    controller: 'ServicesCtrl'
  })
  .when('/contacts',{
    templateUrl: 'layouts/contacts.html',
    controller: 'ContactCtrl'
  })
  .when('/about',{
    templateUrl: 'layouts/about.html',
    controller: 'MainCtrl'
  })
  //.otherwise()
  

}]);

app.controller('MainCtrl',['$scope',function($scope){
  console.log("THIS IS WORKING!!");
}]);
app.controller('ServicesCtrl',['$scope','$http',function($scope,$http){
   $http.get('services.json').then(function(response){
        $scope.services = response.data;
   });
}]);
app.controller('ContactCtrl',function(){
  console.log("THIS IS CONTACT!!");
});
// */