angular.module('events').controller('eventCreateController', ['$location', '$cordovaCamera', '$cordovaCapture', 'eventsService', 'events',
    function ($location, $cordovaCamera, $cordovaCapture, eventsService, events) {
        var ctrl = this;
        init();

        function init() {
            ctrl.event = events.create();
        }

        ctrl.saveEvent = function () {
            eventsService.addEvent(ctrl.event);
            $location.path('/tab/events');
        };

    }
]);