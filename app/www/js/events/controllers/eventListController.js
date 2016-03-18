angular.module('events').controller('eventListController', ['$cordovaCalendar', '$ionicListDelegate', 'eventsService',
    function($cordovaCalendar, $ionicListDelegate, eventsService) {
        var ctrl = this;
        init();

        function init() {
            ctrl.events = eventsService.getEvents();
            ctrl.showDelete = false;
        }

        ctrl.removeEvent = function(event) {
            eventsService.removeEvent(event);
            if(ctrl.events.length == 0) {
                ctrl.showDelete = false;
            }
        };

        ctrl.disableEdit = function() {
            return ctrl.events.length <= 0;
        };

        ctrl.addToCalendar = function(event) {
            $cordovaCalendar.createEventInteractively({
                title: event.title,
                notes: event.description,
                startDate: event.getStartDate(),
                endDate: event.getEndDate()
            }).then(function() {
                $ionicListDelegate.closeOptionButtons();
            });
        };
    }
]);