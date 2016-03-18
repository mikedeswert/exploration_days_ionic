angular.module('events').controller('eventListController', ['eventsService', function (eventsService) {
    var ctrl = this;
    ctrl.events = [];

    ctrl.init = function() {
        ctrl.events = eventsService.getEvents();
    }
}]);