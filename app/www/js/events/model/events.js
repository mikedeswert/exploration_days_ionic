angular.module('events').factory('events', ['uuid4', function(uuid4) {
    var ONE_HOUR_IN_MILLISECONDS = 60*60*1000;

    return {
        create: create
    };

    function create(event) {
        if(event == undefined) {
            return new Event();
        }
        return toEvent(event);
    }

    function Event() {
        this.id = uuid4.generate();
        this.title = '';
        this.description = '';
        this.date = new Date();
        this.startTime = getDefaultStartTime();
        this.endTime = new Date(this.startTime.getTime() + ONE_HOUR_IN_MILLISECONDS);

        this.copy = function() {
            var event = new Event();
            event.id = this.id;
            event.title = this.title;
            event.description = this.description;
            event.date = new Date(this.date.getTime());
            event.startTime = new Date(this.startTime.getTime());
            event.endTime = new Date(this.endTime.getTime());

            return event;
        }
    }

    function getDefaultStartTime() {
        var date = new Date();
        date.setSeconds(0);
        date.setMilliseconds(0);

        return date;
    }

    function toEvent(event) {
        new Event().copy(event);
    }
}]);