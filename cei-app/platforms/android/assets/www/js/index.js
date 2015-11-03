﻿(function (global) {
    "use strict";

    function onDeviceReady() {
        document.addEventListener("online", onOnline, false);
        document.addEventListener("resume", onResume, false);
        loadMapsApi();
    }

    function onOnline() {
        loadMapsApi();
    }

    function onResume() {
        loadMapsApi();
    }

    function loadMapsApi() {
        if (navigator.connection.type === Connection.NONE || (global.google !== undefined && global.google.maps)) {
            return;
        }

        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDx52P2MSQPAvI3UhgGDSy2MQCXeNCpMpw&sensor=true');
    }

    document.addEventListener("deviceready", onDeviceReady, false);
})(window);