angular.module('events').controller('eventListController', ['$cordovaCalendar', 'eventsService',
    function ($cordovaCalendar, eventsService) {
    var ctrl = this;
    init();

    function init() {
        ctrl.events = eventsService.getEvents();
    }

    ctrl.removeEvent = function(event) {
        eventsService.removeEvent(event);
    };

    ctrl.addToCalendar = function(event) {
        $cordovaCalendar.createEventInteractively({
            title: event.title,
            notes: event.description,
            startDate: event.getStartDate(),
            endDate:event.getEndDate()
        });
    };
}
]);