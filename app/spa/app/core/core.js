/**
 * Created by Samir on 15/05/2016.
 */

var core = angular.module("Core");

core.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/core/views/home.html"
        })
        .when("/about", {
            templateUrl: "app/core/views/about.html"
        })
        .when("/skills", {
            templateUrl: "app/core/views/skills.html"
        })
        .when("/projects", {
            templateUrl: "app/core/views/projects.html"
        })
        .when("/jobs", {
            templateUrl: "app/core/views/jobs.html"
        })
        .when("/contact", {
            templateUrl: "app/core/views/contact.html"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);