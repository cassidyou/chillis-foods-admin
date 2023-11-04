$(document).ready(function(){
    var screenWidth = $(window).width();
    if(screenWidth >  1440){
        $('.icon-picker').iconpicker({
            rows: 2,
            cols: 12,
            footer: false
        });
    }
    if(screenWidth > 1100 & screenWidth <= 1440  ){
        $('.icon-picker').iconpicker({
            rows: 2,
            cols: 10,
            footer: false
        });
    }else if(screenWidth > 1023 & screenWidth <= 1100  ){
        $('.icon-picker').iconpicker({
            rows: 2,
            cols: 6,
            footer: false
        });
    }else if(screenWidth > 991 && screenWidth <= 1023 ){
        $('.icon-picker').iconpicker({
            rows: 2,
            cols: 8,
            footer: false
        });
    }
    if(screenWidth > 767 && screenWidth <= 991){
        $('.icon-picker').iconpicker({
            rows: 4,
            cols: 12,
            footer: false
        });
    }else if(screenWidth > 600 && screenWidth <= 767){
        $('.icon-picker').iconpicker({
            rows: 4,
            cols: 12,
            footer: false
        });
    }else if(screenWidth > 500 && screenWidth <= 600){
        $('.icon-picker').iconpicker({
            rows: 4,
            cols: 10,
            footer: false
        });
    }else if(screenWidth > 320 && screenWidth <= 500){
        $('.icon-picker').iconpicker({
            rows: 4,
            cols: 7,
            footer: false
        });
    }else if(screenWidth <= 320){
        $('.icon-picker').iconpicker({
            rows: 4,
            cols: 5,
            footer: false
        });
    }
})