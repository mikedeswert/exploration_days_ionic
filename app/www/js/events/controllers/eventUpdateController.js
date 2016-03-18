angular.module('events').controller('eventUpdateController', ['$cordovaCalendar', '$stateParams', '$location', 'eventsService',
    function($cordovaCalendar, $stateParams, $location, eventsService) {
        var ctrl = this;

        ctrl.oldEvent = eventsService.getEvent($stateParams.eventId);
        ctrl.event = ctrl.oldEvent.copy();

        ctrl.updateEvent = function() {
            eventsService.updateEvent(ctrl.oldEvent, ctrl.event);
            updateCalendar();
            $location.path('/tab/events/' + ctrl.event.id);
        };

        function updateCalendar() {
            try {
                $cordovaCalendar.modifyEvent({
                    title: ctrl.oldEvent.title,
                    notes: ctrl.oldEvent.description,
                    startDate: ctrl.oldEvent.getStartDate(),
                    endDate: ctrl.oldEvent.getEndDate(),
                    newTitle: ctrl.event.title,
                    newNotes: ctrl.event.description,
                    newStartDate: ctrl.event.getStartDate(),
                    newEndDate: ctrl.event.getEndDate()
                });
            } catch(e) {
                console.error(e);
            }
        }
    }
]);