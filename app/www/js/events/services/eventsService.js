angular.module('events').factory('eventsService', ['localStorage', 'events', function(localStorage, events) {
    var storedEvents;

    return {
        getEvents: getEvents,
        getEvent: getEvent,
        addEvent: addEvent,
        updateEvent: updateEvent,
        removeEvent: removeEvent
    };

    function getEvents() {
        if(storedEvents == undefined) {
            storedEvents = toEvents(localStorage.getArray('events'));
        }
        return storedEvents;
    }

    function getEvent(eventId) {
        var events = getEvents();
        for(var i = 0; i < events.length; i++) {
            if(events[i].id == eventId) {
                return events[i];
            }
        }

        return undefined;
    }

    function addEvent(event) {
        storedEvents.push(event);
        saveEvents();
    }

    function updateEvent(oldEvent, newEvent) {
        storedEvents[storedEvents.indexOf(oldEvent)] = newEvent;
        saveEvents();
    }

    function removeEvent(event) {
        storedEvents.splice(storedEvents.indexOf(event), 1);
        saveEvents();
    }

    function saveEvents() {
        localStorage.setObject('events', storedEvents);
    }

    function toEvents(rawEvents) {
        var newEvents = [];

        angular.forEach(rawEvents, function(rawEvent) {
            newEvents.push(events.create(rawEvent));
        });

        return newEvents;
    }
}]);