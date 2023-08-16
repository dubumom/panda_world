$(document).ready(function(){

// 바오 가족  소개
  let l_btn = $('i.bao_btn');
  let bao_slide = $('.img_box> ul> .img');
  let bao_slide02 = $('.txt_box_inner> ul> li');
  let n = 0;

  function moveLeft(){
    bao_slide.eq(n).stop().fadeOut();
    bao_slide02.eq(n).stop().fadeOut();
    if(n==3){
      n=0;
    } else{
      n++;
    }
    bao_slide.eq(n).fadeIn();
    bao_slide02.eq(n).fadeIn();
  }
  l_btn.click(function(){
    moveLeft();
  });



  // 사육사 소개 텝 콘텐츠
  $('#tab_con .n1').click(function(){
    $('#tab_con .name').removeClass('act02');
    $(this).addClass('act02');

    $('.box').css('opacity','0');
    $('.box01').css('opacity','1');

    $('.z_bg').hide();
    $('.bg_color01').show();
  });
  $('#tab_con .n2').click(function(){
    $('#tab_con .name').removeClass('act02');
    $(this).addClass('act02');

    $('.box').css('opacity','0');
    $('.box02').css('opacity','1');

    $('.z_bg').hide();
    $('.bg_color02').show();
  });
  $('#tab_con .n3').click(function(){
    $('#tab_con .name').removeClass('act02');
    $(this).addClass('act02');

    $('.box').css('opacity','0');
    $('.box03').css('opacity','1');

    $('.z_bg').hide();
    $('.bg_color03').show();
  });

});