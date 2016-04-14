/**
 * Created by Joe on 14/4/16.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contacts', {
            templateUrl : 'templates/contacts.html',
            controller  : 'appCtrl'
        });
});

myApp.factory('Service', function() {
    return {
        data: {}
    };
});




