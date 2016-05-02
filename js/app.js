"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router"
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
      url: "/grams",
      templateUrl: "js/wdinstagram/index.html",
      controller: "wdinstagramIndexController",
      controllerAs: "indexVm"
    })
    .state("wdinstagramShow", {
      url:"grams/:id",
      templateUrl: "js/wdinstagram/show.html",
      controller: "wdinstagramShowController",
      controllerAs: "showVm"
    })
  }

function IndexControllerFunc(){
  var indexVm = this;
  indexVm.grams = grams;

}

ShowControllerFunc.$inject = ["$stateParams"];
function ShowControllerFunc($stateParams) {
  var showVm = this;
  showVm.gram = grams[$stateParams.id]
}
})();
