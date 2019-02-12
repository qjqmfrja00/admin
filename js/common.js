'use strict';
$(function() {
    //a 클릭 이벤트 막기
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

    //gnb 메뉴 토글
    $('#header div.top-util a.gnb-toggle').on('click', function() {
        $('#header, #gnb, #main').toggleClass('on');
    });
    
    //gnb 소메뉴
    $('#gnb > nav > ul > li > a').each(function() {
        if ($(this).parent().find('ul').length > 0) {
            $(this).append('<i class="fas fa-plus"></i>'); //아이콘
        }
    });
    $('#gnb > nav > ul > li > a').on('click', function() {
        $('#gnb > nav > ul > li > a').not(this).parent().find('ul').slideUp(300);
        $('#gnb > nav > ul > li > a').find('i').attr({'class': 'fas fa-plus'}); 
        if (($(this).parent().find('ul').length > 0)) {
            $(this).parent().find('ul').slideDown(300);
            $(this).find('i').attr({'class': 'fas fa-minus'});
        }
    });

    //date picker
    $('#date1').datepicker();
    $('#date2').datepicker();
    setDatePickerBtn('.date1');
    setDatePickerBtn('.date2');
    function setDatePickerBtn(selector) {
        $(selector).on('click', function() {
            $(this).prev().focus();
        });
    }
});
    