$(document).ready(function(){

  $('.s_wrap > li:last-child').insertBefore('.s_wrap > li:first-child');
  $('.s_wrap').css('margin-top','-300px');

  function moveleft(){
    $('.s_wrap').animate({'margin-top':'-600px'},function(){
      $('.s_wrap > li:first-child').insertAfter('.s_wrap > li:last-child');
      $('.s_wrap').css('margin-top','-300px');
    });
  }

  let Timer = setInterval(moveleft, 3000);
  


  // 메인메뉴에 마우스 오버시 서브메뉴 한꺼번에 나오게
  $('.gnb > ul').hover(function(){
    $('.sub').stop().fadeIn();
  },function(){
    $('.sub').stop().fadeOut();
  });

  // 메인메뉴에 마우스 오버시 서브메뉴 하나씩 나오게
  // $('.gnb > ul > li').hover(function(){
  //   $(this).find('.sub').fadeIn();
  // },function(){
  //   $(this).find('.sub').fadeOut();
  // });


  // 탭메뉴 컨텐츠
  // 1. 공지사항 먼저 나오게하기
  let notice = $('.t_con li:first-child .con')
  notice.show();

  // 2. 메뉴 클릭시 서식 변경하기
  $('.t_con a').click(function(){
    $('.t_con a').removeClass('act');
    $(this).addClass('act');

    // 공지사항 숨기기
    $('.con').show();
    $(this).next().hide();

    return false;
  });

});