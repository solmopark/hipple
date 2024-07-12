// menu 클릭시 color 변경
$(function () {
  $(".menu li a").click(function () {
    $(".menu li a").removeClass("on");
    $(this).addClass("on");
  });
});

// sub_brand heart
$(function () {
  $(".brand_box .img span").click(function () {
      $(".brand_box .img span").removeClass("on");
      $(this).addClass("on");
  });
});



// clock
function now__Clock(){
  const clock = document.querySelector(".clock");

  function getClock(){
  const d = new Date();
  const h = String(d.getHours()).padStart(2,"0");
  const m = String(d.getMinutes()).padStart(2,"0");
  //const s = String(d.getSeconds()).padStart(2,"0");
  clock.innerText = `${h}:${m}`;
  }

  getClock(); //맨처음에 한번 실행
  setInterval(getClock, 1000); //1초 주기로 새로실행
}
now__Clock();



//local_keywords
$(function () {
  $(".localwrap .keyword .keyword_t").click(function () {
      $(".localwrap .keyword .keyword_t").removeClass("on");
      $(this).addClass("on"); 
  });
});


// local heart
$(" .like ").click(function () {
  if ($(" .like ").hasClass("active")) {
    $(" .like ").removeClass("active");
  }
  else {
    $(" .like ").addClass("active");
  }
});


//local_keywords
$(function () {
  $(".travelWrap .travel_box .price + .round").click(function () {
      $(".travelWrap .travel_box .price + .round").removeClass("on");
      $(this).addClass("on"); 
  });
});


// local_keywords + travelWrap
$('.pop_1').click(function() {
  if ( $('.popup-2').hasClass('active') ) {
    $('.popup-2').removeClass('active');
  }
  else {
    $('.popup-2').addClass('active');
  }
});

// localswipers
let swiper05 = new Swiper(".brandArea", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: { delay: 0, disableOnInteraction: false },
  speed: 4000,
  breakpoints: {
      1000: {
          slidesPerView: 3.5,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
      },
  },
});

// brandwrap_more
$(function () {
  $(".more").click(function (e) {
    e.stopPropagation();
    $(".more ul").fadeToggle(); // Use fadeToggle() instead of fadeIn()
  });

  $(".more ul li").click(function (e) {
    e.stopPropagation();
  });

  $(".more ul li").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).find("*").addClass("read");
  });

  $(document).click(function () {
    $(".more ul").fadeOut();
  });
});
//brandwrap_more on
$(function () {
  $(".user_setting .userbox li .user_item").click(function () {
    $(".user_setting .userbox li .user_item").removeClass("on");
    $(this).addClass("on");
  });
});