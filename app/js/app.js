"use strict";

var angularMovieApp = angular.module('angularMovieApp', []);

angularMovieApp.config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller : 'moviesController'
        })
        .otherwise({
            redirectTo: '/movies'
        });
});