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
    var countryCode = '';
    var cityName = '';

    $.ajax({
        url:"https://ipapi.co/" + ip + "/json/",
        cashe: false,
        async: false,
        success: function(data) {
            ipInfo = data;
            countryCode = data.country_code;
            cityName = data.region;
            console.log(data);
        }
    });

    var temperature = '';

    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + ipInfo.region + "&appid=98f5c39a38b987172eb484d62acb0f9c",
        cach: false,
        async: false,
        success: function(data) {
            temperature = data.main.temp - 273.15;
            console.log(data);
        }
    });

    $('#search-box').focus(function() {
        
        $("li[class*=bottom-nav-item]").addClass( "d-none" )
        $("li[class*=bottom-nav-item]").removeClass("d-flex");
        
       })

        $('#search-box').blur(function(){
            $("li[class*='bottom-nav-item']" ).removeClass("d-none");
            $("li[class*='bottom-nav-item']" ).addClass("d-flex");

            
        });
    
        $(window).scroll(function(){
            $('.secendry-header').toggleClass('d-flex', $(this).scrollTop() > 125);
        })
        var today = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

        var weatherData = temperature + '° ' + cityName + ', ' + countryCode;
        var dateData = today.toLocaleDateString('us-EN', options);
        
        $('.weather-data').text(weatherData);
        $('.date-data').text(dateData);

    
    })
    




