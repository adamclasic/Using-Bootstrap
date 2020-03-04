$(document).ready(function () {

    var ip = '';
    $.ajax({
        url: "https://api.ipify.org/?format=json",
        cache: false,
        async: false,
        success: function(data) {
            console.log(data)
            ip = data.ip;

        }
    });

    var ipInfo = '';

    $.ajax({
        url:"https://ipapi.co/" + ip + "/json/",
        cashe: false,
        async: false,
        success: function(data) {
            ipInfo = data;
        }
    });

    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + ipInfo.city + "&appid=98f5c39a38b987172eb484d62acb0f9c",
        cach: false,
        async: false,
        success: function(data) {
            console.log(data)
        }
    });



});
