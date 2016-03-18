angular.module('events').controller('eventUpdateController', ['$stateParams', '$location', 'eventsService',
    function($stateParams, $location, eventsService) {
        var ctrl = this;
        ctrl.oldEvent = eventsService.getEvent($stateParams.eventId);
        ctrl.event = ctrl.oldEvent.copy();

        ctrl.updateEvent = function() {
            eventsService.updateEvent(ctrl.oldEvent, ctrl.event);
            $location.path('/tab/events/' + ctrl.event.id);
        }
    }
]);