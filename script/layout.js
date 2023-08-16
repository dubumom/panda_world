//layout.js



// 제이쿼리
$(document).ready(function(){

  //모달변수 생성하기

  const modal=`

  <div class="modal">
    <div class="inner">
      <a href="#" title="">
        <img src="./images/modal.jpg" alt="">
      </a> 

      <p>
        <input type="checkbox" id="ch">
        <label for="ch">오늘 하루 열지 않음</label>
        <input type="button" value="닫기" id="c_btn">
      </p>
    </div>
  </div>
  `

  $('body').append(modal);
  let ch = $('.modal #ch'); 

  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }

  function closeModal(){
    if(ch.is(':checked')){
      $.cookie('popup','none',{expires:1,path:'/'});
    }
    $('.modal').hide();
  }

  $('.modal #c_btn').click(function(){
    closeModal();
  });

    //스크롤하지 않았을 때 마우스 오버시 색상 변경

    //헤더에 마우스 오버시 색상 변경
    $('header').hover(function(){
      $('header').addClass('act'); 
      $('header h1 img').attr('src', './images/logo_w.png');
      $('header .gnb > li > a, header i.fas').css('color','#333');
    },
      //마우스 헤더 밖으로 나갔을때 원래대로
      function(){
        $('header').removeClass();
        $('header h1 img').attr('src', './images/logo_b.png');
        $('header .gnb > li > a, header i.fas').css('color','#fff');
      }
    );

  //세로스크롤 값 구하기
  $(window).scroll(function(){

    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos>=900){
      $('header').addClass('act');//1. 배경색변경
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo_b.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#333');

      //header에 마우스 아웃시 색상 어둡게
      $('header').mouseleave(function(){
        $('header').addClass('act');//1. 배경색변경
        //2. 로고변경
        $('header h1 img').attr('src','./images/logo_b.png');
        //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
        $('header .gnb > li > a, header i.fas').css('color','#333');
      });

    }else{
      $('header').removeClass(); //1. 배경 원래대로
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo_w.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#fff');


    //화면스크롤 내리지 않고 헤더에 마우스 오버시 색상 변경
    $('header').hover(function(){
      $('header').addClass('act');//1. 배경색변경
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo_b.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#333');
    }, function(){ //마우스 아웃시 다시 원래대로 색상 변경
      $('header').removeClass(); //1. 배경 원래대로
        //2. 로고변경
        $('header h1 img').attr('src','./images/logo_w.png');
        //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
        $('header .gnb > li > a, header i.fas').css('color','#fff');
      });
    }
  });




  // .next_btn 클릭 시 아래로 이동
  $('.next_btn').click(function(){

    $('html, body').animate({scrollTop:$('#bao').offset().top-70},500,'easeOutQuint');
    return false;
  });

  // 내비게이션 클릭 시 원하는 섹션으로 이동
  let gnb = $('.gnb li, #m_nav li');

  gnb.click(function(){
    let i = $(this).index()+1;
    console.log(i); //2,3,4,5,6

    $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-70},400, 'easeOutCubic');
    return false;
  });

  //판다 가족 소개 아코디언


  //유튜브 스크립트

  $('#l_btn').click(function(){
    $('.play').removeClass('on');
    $('.p01').addClass('on');
  });
  $('#r_btn').click(function(){
    $('.play').removeClass('on');
    $('.p02').addClass('on');
  });

  //이벤트 베너 스크립트
  let event_n = 1;
  let p_num5 = $('.silde_wrap5 >li').length;

  let randomNumber = Math.floor(Math.random() * 3+ 1);
  $('.e_img').attr('src', './images/banner0' + randomNumber + '.png');

});