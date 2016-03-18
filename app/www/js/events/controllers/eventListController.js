angular.module('events').controller('eventListController', ['$cordovaCalendar', '$ionicListDelegate', '$q', 'eventsService',
    function($cordovaCalendar, $ionicListDelegate, $q, eventsService) {
        var ctrl = this;
        init();

        function init() {
            ctrl.events = eventsService.getEvents();
            if(window.plugins !== undefined) {
                ctrl.checkCalendarStatus();
            }
            ctrl.showDelete = false;
        }

        ctrl.removeEvent = function(event) {
            eventsService.removeEvent(event);
            if(ctrl.events.length == 0) {
                ctrl.showDelete = false;
            }
        };

        ctrl.showEdit = function() {
            return ctrl.showDelete == false && ctrl.events.length > 0;
        };

        ctrl.openInCalendar = function(event) {
            $cordovaCalendar.openCalendar(event.getStartDate());
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

        ctrl.checkCalendarStatus = function() {
            var calendarCheckPromises = [];

            ctrl.events.forEach(function(event) {
                console.log('try to find ' + JSON.stringify(event));
                calendarCheckPromises.push($cordovaCalendar.findEvent({
                    title: event.title,
                    startDate: event.getStartDate()
                }));
            });

            $q.all(calendarCheckPromises).then(function(results) {
                for(var i = 0; i < results.length; i++) {
                    ctrl.events[i].hasCalendarEntry = results[i].length > 0;
                }
            });
        }
    }
]);