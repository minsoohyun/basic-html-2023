
$(document).ready(function () {
    //풀다운 메뉴 이벤트
    $('.outer-menu').hover(function () {
        $(this).find('.inner-menu').css('display', 'block');
    }, function () {
        $(this).find('.inner-menu').css('display', 'none');
    });

    //masonry layout + imageload plugin
    $('#main-section').imagesLoaded(function () {
        //이미지로드 플러그인
        $('#main-section').masonry({
            itemSelector: '.paper',
            columnWidth: 220,
            isAnimated: true,
        });
    });

    // 라이트박스 동작
    function showLightBox(obj) { //라이트박스 보이기
        var img_src = obj.getElementsByTagName('img')[0].src;
        $('#random-image').attr('src', img_src);

        $('#darken-background').show();

        $('#darken-background').css('top', $(window).scrollTop);
        $('body').css('overflow', 'hidden');
    }
    function hideLightBox() { //라이트박스 숨기기
        $('#darken-background').hide();
        $('body').css('overflow', '');
    }

    $('.paper').click(function () {
        console.log('paper');
        showLightBox(this);
    });
    $('#darken-background').click(function () {
        hideLightBox();
    });
    $('#lightbox').click(function (event) {
        event.stopPropagation(); // 클릭 이벤트 하위 객체 전달 금지
    });
});
