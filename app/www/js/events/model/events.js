angular.module('events').factory('events', ['uuid4', function(uuid4) {
    var ONE_HOUR_IN_MILLISECONDS = 60*60*1000;

    return {
        create: create
    };

    function create() {
        return new Event();
    }

    function Event() {
        this.id = uuid4.generate();
        this.date = new Date();
        this.startTime = getDefaultStartTime();
        this.endTime = new Date(this.startTime.getTime() + ONE_HOUR_IN_MILLISECONDS);
    }

    function getDefaultStartTime() {
        var date = new Date();
        date.setSeconds(0);
        date.setMilliseconds(0);

        return date;
    }
}]);