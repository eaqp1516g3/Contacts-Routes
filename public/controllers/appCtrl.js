/**
 * Created by Joe on 14/4/16.
 */

angular.module('myApp').controller('appCtrl',['$scope','$http',function($scope,$http){

    console.log("Hello world from my controller");

    var refresh = function() {
        $http.get('/contacts').success(function(response){

            console.log("i got the data I requested");
            $scope.contactlist = response;
            $scope.contact="";
        });
    };

    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contacts', $scope.contact).success(function(response){
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contacts/' + id).success(function(response) {
            refresh();
        });

    };

    $scope.edit = function(id){
        console.log(id);
        $http.get('/contacts/' + id).success(function(response){
            $scope.contact = response;
        });
    };

    $scope.update = function(){
        console.log($scope.contact._id);
        $http.put('/contacts/' + $scope.contact._id, $scope.contact).success(function(response){
            refresh();
        })

    };

    $scope.deselect = function(){
        $scope.contact= "";
    }








}]);