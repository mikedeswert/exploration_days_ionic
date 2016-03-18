angular.module('events').controller('eventEditorDirectiveController', ['events', function(events) {
    var ctrl = this;
    init();

    function init() {
        if(ctrl.event !== undefined) {
            return;
        }

        ctrl.event = events.create();
    }

    ctrl.takePhoto = function () {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            //$scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // An error occured. Show a message to the user
        });
    };


    document.addEventListener("deviceready", function () {
        console.log('aha');
        ctrl.takePicture = function () {
            var options = {limit: 3};

            $cordovaCapture.captureImage(options).then(function (imageData) {
                console.log(imageData);
            }, function (err) {
                console.log(err);
            });
        };
    }, false);
}]);