(function ($) {
    "use strict";

    $('.selectize').selectize({
        sortField: 'text'
    });

    $('.selectize-tag').selectize({
        plugins: ['remove_button'],
        delimiter: ',',
        persist: false,
        create: function (input) {
            return {
                value: input,
                text: input
            };
        }
    });
    $('.arrow-down-scroll').on('click',function(){
        var windowHeight = $(window).height();
        $('html body').animate({
            scrollTop: windowHeight
        },1000);
    });
})(window.jQuery);
