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
    speed: 8000,
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
    rtl:true
  });
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  $('.our_works_section .container_wrapper').css({'padding-bottom':`${($('.our_works_section .our_work_scroller .our_wok_slider_innerwrap .work_card').length * 300)+'px'}`})
});
