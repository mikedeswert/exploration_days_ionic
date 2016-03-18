angular.module('events').controller('eventDetailController', ['$stateParams', '$location', 'eventsService',
    function($stateParams, $location, eventsService) {
        var ctrl = this;
        init();

        function init() {
            ctrl.event = eventsService.getEvent($stateParams.eventId);
        }

        ctrl.updateEvent = function() {
            $location.path('/tab/events/' + ctrl.event.id + '/update');
        }
    }
]);