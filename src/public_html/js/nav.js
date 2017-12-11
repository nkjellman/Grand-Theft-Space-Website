var app = angular.module("GTS", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/homePage", {
        templateUrl : "home.html"
    })
    .when("/downloadsPage", {
        templateUrl : "downloads.html"
    })
    .when("/screenshotsPage", {
        templateUrl : "screenshots.html"
    })
    .when("/screenshotImages", {
        templateUrl : "screenshots.html"
    })
    .when("/videosPage", {
        templateUrl : "videos.html"
    })
    .when("/creditsPage", {
        templateUrl : "credits.html"
    });
});