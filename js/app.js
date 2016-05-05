"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("wdinstagramIndexController", IndexControllerFunc)
  .controller("wdinstagramShowController", ShowControllerFunc)

  function RouterFunction($stateProvider) {

    $stateProvider
    .state("wdinstagramIndex", {
      url: "/entries",
      templateUrl: "js/wdinstagram/index.html",
      controller: "wdinstagramIndexController",
      controllerAs: "indexVm"
    })
    .state("wdinstagramShow", {
      url:"entries/:id",
      templateUrl: "js/wdinstagram/show.html",
      controller: "wdinstagramShowController",
      controllerAs: "showVm"
    })
  }

IndexControllerFunc.$inject = ["$resource"];
function IndexControllerFunc($resource){
  var indexVm = this;
  //created an object to put variables and methods on; only there if you write a callback function
  indexVm.grams = $resource("http://localhost:3000/entries/:id").query();

}

ShowControllerFunc.$inject = ["$stateParams", "$resource"];
function ShowControllerFunc($stateParams, $resource) {
  var showVm = this;
  showVm.gram = $resource("http://localhost:3000/entries/:id").get({id: $stateParams.id});
}
})();
