$(document).ready(function () {
  $(".our_services_slider").slick({
    speed: 1500,
    autoplay: false,
    // autoplaySpeed: 100,
    // cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: `  <button class="slick_arrows slick_left">
    <svg xmlns="http://www.w3.org/2000/svg" width="39.405" height="34.482" viewBox="0 0 39.405 34.482">
      <path id="arrow-right-short_2_" data-name="arrow-right-short (2)" d="M43.405,21.74a2.463,2.463,0,0,0-2.463-2.463H12.412L22.986,8.709A2.466,2.466,0,1,0,19.5,5.222L4.723,20a2.463,2.463,0,0,0,0,3.487L19.5,38.259a2.466,2.466,0,1,0,3.487-3.487L12.412,24.2H40.943A2.463,2.463,0,0,0,43.405,21.74Z" transform="translate(-4 -4.499)" fill-rule="evenodd"/>
    </svg>
  </button>`,
    nextArrow: `  <button class="slick_arrows slick_right"><svg xmlns="http://www.w3.org/2000/svg" width="39.405" height="34.482" viewBox="0 0 39.405 34.482">
    <path id="arrow-right-short_2_" data-name="arrow-right-short (2)" d="M4,21.74a2.463,2.463,0,0,1,2.463-2.463H34.994L24.42,8.709a2.466,2.466,0,1,1,3.487-3.487L42.682,20a2.463,2.463,0,0,1,0,3.487L27.906,38.259a2.466,2.466,0,1,1-3.487-3.487L34.994,24.2H6.463A2.463,2.463,0,0,1,4,21.74Z" transform="translate(-4 -4.5)" fill-rule="evenodd"/>
  </svg>  
  </button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          useTransform: false,
          speed: 500,
        },
      },
    ],
  });
  $(".scroll_slider.forward").slick({
    speed: 5000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    focusOnSelect: false,
    pauseOnHover: false,
    touchMove: false,
    draggable: false,
    variableWidth: true,
  });
  $(".scroll_slider.reverse").slick({
    speed: 5000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    focusOnSelect: false,
    pauseOnHover: false,
    touchMove: false,
    variableWidth: true,
    draggable: false,
    rtl: true,
  });
  let fb = Fancybox.bind("[data-fancybox]", {
    backdropClick: 0,
  });
  $('[title="Close"]').click(function (e) {
    e.preventDefault();
    fb.close();
  });

  $("#hamburgermenu").click(function () {
    if ($("body").hasClass("open_overlay")) {
      $("body").removeClass("show_nav");
      setTimeout(() => {
        $("body").removeClass("open_overlay");
      }, 800);
    } else {
      $("body").addClass("open_overlay");
      setTimeout(() => {
        $("body").addClass("show_nav");
      }, 500);
    }
  });
  if (window.screen.width < 580) {
    $("header .header_inner_wrap nav ul li a").click(function () {
      $("body").removeClass("show_nav");
      setTimeout(() => {
        $("body").removeClass("open_overlay");
      }, 800);
    });
  }
  if (window.screen.width < 1200) {
    $("#portfolio_slider").slick({
      speed: 500,
      autoplay: false,
      // autoplaySpeed: 100,
      // cssEase: "linear",
      infinite: false,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: `  <button class="slick_portfolio_arrows slick_left">
      <svg xmlns="http://www.w3.org/2000/svg" width="39.405" height="34.482" viewBox="0 0 39.405 34.482">
        <path id="arrow-right-short_2_" data-name="arrow-right-short (2)" d="M43.405,21.74a2.463,2.463,0,0,0-2.463-2.463H12.412L22.986,8.709A2.466,2.466,0,1,0,19.5,5.222L4.723,20a2.463,2.463,0,0,0,0,3.487L19.5,38.259a2.466,2.466,0,1,0,3.487-3.487L12.412,24.2H40.943A2.463,2.463,0,0,0,43.405,21.74Z" transform="translate(-4 -4.499)" fill-rule="evenodd"/>
      </svg>
    </button>`,
      nextArrow: `  <button class="slick_portfolio_arrows slick_right"><svg xmlns="http://www.w3.org/2000/svg" width="39.405" height="34.482" viewBox="0 0 39.405 34.482">
      <path id="arrow-right-short_2_" data-name="arrow-right-short (2)" d="M4,21.74a2.463,2.463,0,0,1,2.463-2.463H34.994L24.42,8.709a2.466,2.466,0,1,1,3.487-3.487L42.682,20a2.463,2.463,0,0,1,0,3.487L27.906,38.259a2.466,2.466,0,1,1-3.487-3.487L34.994,24.2H6.463A2.463,2.463,0,0,1,4,21.74Z" transform="translate(-4 -4.5)" fill-rule="evenodd"/>
    </svg>  
    </button>`,
      useTransform: false,
    });
  }
  // if (window.screen.width > 1200) {
  //   $(".our_works_section .container_wrapper").css({
  //     "padding-bottom": `${
  //       $(
  //         ".our_works_section .our_work_scroller .our_wok_slider_innerwrap .work_card"
  //       ).length *
  //         300 +
  //       "px"
  //     }`,
  //   });
  // }

  var count = 0;
  var innterval = setInterval(function () {
    if (count == 100) {
      clearInterval(innterval);
      setTimeout(() => {
        // $(".preloader_blade").fadeOut(700);
        $("#loadingcount").fadeOut(200);
        setTimeout(() => {
          $(".preloader_blade").css({ transform: "translateY(-100%)" });
        }, 300);
      }, 500);
    }
    $("#loadingcount").html((count < 10 ? "0" : null) + count + "%");
    // $(".progress_bar span").css({ width: count + "%" });
    count++;
  }, 30);
});
