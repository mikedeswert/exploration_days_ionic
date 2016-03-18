angular.module('events').controller('eventCreateController', ['$location', 'eventsService', 'events',
    function($location, eventsService, events) {
        var ctrl = this;
        init();

        function init() {
            ctrl.event = events.create();
        }

        ctrl.saveEvent = function() {
            eventsService.addEvent(ctrl.event);
            $location.path('/tab/events');
        }
    }
]);