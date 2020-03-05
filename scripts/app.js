$(document).ready(function () {

    // var ip = '';
    // $.ajax({
    //     url: "https://api.ipify.org/?format=json",
    //     cache: false,
    //     async: false,
    //     success: function(data) {
    //         console.log(data)
    //         ip = data.ip;

    //     }
    // });

    // var ipInfo = '';

    // $.ajax({
    //     url:"https://ipapi.co/" + ip + "/json/",
    //     cashe: false,
    //     async: false,
    //     success: function(data) {
    //         ipInfo = data;
    //         console.log(data)
    //     }
    // });

    // $.ajax({
    //     url:"http://api.openweathermap.org/data/2.5/weather?q=" + ipInfo.region + "&appid=98f5c39a38b987172eb484d62acb0f9c",
    //     cach: false,
    //     async: false,
    //     success: function(data) {
    //         console.log(data)
    //     }
    // });

    $('#search-box').focus(function() {
        
        $("li[class*=bottom-nav-item]").addClass( "d-none" )
        $("li[class*=bottom-nav-item]").removeClass("d-flex");
        console.log("add")
        
       })

        
        // class="nav-item bottom-nav-item font-weight-bold d-flex
        // alert('hi');
        $('#search-box').blur(function(){
            $("li[class*='bottom-nav-item']" ).removeClass("d-none");
            $("li[class*='bottom-nav-item']" ).addClass("d-flex");
        console.log("hi")

            
        });
    
        if($(window).scrollTop() > 100) {
            // $("#main").removeClass("bg-danger");
            // $("#main").addClass("bg-danger");
            console.log('we\'re down')
        }
        
    
    })
    




