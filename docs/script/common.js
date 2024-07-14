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
$(document).ready(function () {
  $('.pop_1').click(function () {
      if ($('.popup-2').hasClass('active')) {
          $('.popup-2').removeClass('active');
          $('#contents').removeClass('no-scroll');
      } else {
          $('.popup-2').addClass('active');
          $('#contents').addClass('no-scroll');
      }
  });

  $(document).click(function (event) {
      // 이벤트 발생한 요소가 팝업이나 팝업 열기 버튼이 아닌 경우 팝업을 닫기
      if (!$(event.target).closest('.popup-2, .pop_1').length) {
          $('.popup-2').removeClass('active');
          $('#contents').removeClass('no-scroll');
      }
  });
});


// local_swiper
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


// More_click 
// function More_click () {
// $(document).ready(function () {
//   $('.more').click(function (event) {
//       event.stopPropagation();
//       $('.more_link').toggleClass('active');
//   });

//   $(document).click(function (event) {
//       if (!$(event.target).closest('.more, .more_link').length) {
//           $('.more_link').removeClass('active');
//       }
//   });
// });
// }
// More_click ();

// function Copy_URL() {
//   // 복사문구값 가져오기
//   let copyTxt = document.getElementById(".copy-value");

//   // 복사문구 선택
//   copyTxt.select();
//   copyTxt.setSelectionRange(0, 99999); // Mobile 대응

//    // 복사
//   navigator.clipboard.writeText(copyTxt.value);

//   // 복사완료에 대해 Alert으로 띄우기
//   alert("복사되었습니다.");
// }

// Copy_URL();
function copyText() {
  // Get the input element
  var copyText = document.getElementById("copy-value");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the text inside the text field
  document.execCommand("copy");

  // Alert copied with a slight delay
  setTimeout(function () {
      alert("URL이 복사되었습니다.");
  }, 100);
}
copyText();