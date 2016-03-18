angular.module('events').controller('eventListController', ['eventsService', function (eventsService) {
    var ctrl = this;
    init();

    function init() {
        ctrl.events = eventsService.getEvents();
    }
}]);