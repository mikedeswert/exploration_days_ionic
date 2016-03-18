angular.module('events').controller('eventCreateController', ['eventsService', 'events', function(eventsService, events) {
    var ctrl = this;

    ctrl.init = function() {
        ctrl.event = events.create();
    };

    ctrl.save = function() {
        eventsService.addEvent(ctrl.event);
    }
}]);