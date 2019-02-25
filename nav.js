$('.mobilenav').hide();

var navopen = true

$('.hamburger').on('click', function(){
    if (navopen === true) {
        $('.mobilenav').show();
        navopen = false;
    }
    else  {
        $('.mobilenav').hide();
        navopen = true;
    };
});