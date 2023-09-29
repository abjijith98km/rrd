/** @format */

gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  if (window.screen.width > 1200) {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.06,
      // scrollbarContainer:$('main')
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    locoScroll.on(
      "scroll",
      (func = (scroll) => {
        // if (scroll.scroll.y > window.screen.height) {
        if (scroll.scroll.y > 20) {
          $("body").addClass("stickyheader");
        } else {
          $("body").removeClass("stickyheader");
        }
      })
    );
    $("header .header_inner_wrap nav ul li a[scroll-to]").click(function (e) {
      e.preventDefault();
      let href = $(this).attr("href");
      let target = document.querySelector(`${href}`);
      if (target) {
        locoScroll.scrollTo(target);
      }
    });
    // tell ScrollTrigger to use these proxy methods for the "[data-scroll-container]" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("[data-scroll-container]").style.transform
        ? "transform"
        : "fixed",
    });

    if (window.screen.width > 1200) {
      $(window).resize(function () {
        locoScroll.update();
      });
    }
    if ($(".full_width_banner .inner_wrap").length > 0) {
      gsap.fromTo(
        ".full_width_banner .inner_wrap",
        {
          backgroundPosition: "100% 100%",
          // scrollTrigger: {
          //   trigger: ".full_width_banner .inner_wrap",
          //   start: "0% 100%",
          //   end: "100% 0%",
          //   scroller: "[data-scroll-container]",
          //   scrub: true,
          //   // pin:true,
          // },
        },
        {
          backgroundPosition: "100% 0%",
          scrollTrigger: {
            trigger: ".full_width_banner .inner_wrap",
            start: "0% 100%",
            end: "100% 0%",
            scroller: "[data-scroll-container]",
            scrub: true,
            // pin:true,
          },
        }
      );
    }
    if (
      $(".about_intro .introduction .about_featured_image figure img").length >
      0
    ) {
      gsap.fromTo(
        ".about_intro .introduction .about_featured_image figure img",
        {
          objectPosition: "100% 100%",
          // scale: 1,
          // scrollTrigger: {
          //   trigger:
          //     ".about_intro .introduction .about_featured_image figure img",
          //   start: "0% 100%",
          //   end: "100% 0%",
          //   scroller: "[data-scroll-container]",
          //   scrub: true,
          //   // pin:true,
          // },
        },
        {
          objectPosition: "100% 0%",
          scrollTrigger: {
            trigger:
              ".about_intro .introduction .about_featured_image figure img",
            start: "0% 100%",
            end: "100% 0%",
            scroller: "[data-scroll-container]",
            scrub: true,
            // pin:true,
          },
        }
      );
    }
    if ($(".service_card figure img").length > 0) {
      gsap.to(".service_card figure img", {
        scale: 1,
        scrollTrigger: {
          trigger: ".service_card figure img",
          start: "0% 100%",
          end: "50% 0%",
          scroller: "[data-scroll-container]",
          scrub: true,
          // pin:true,
        },
      });
    }
    if (
      $(".hero_banner .banner_inner_wrap h1 .transform_wrap span").length > 0
    ) {
      gsap.to(".hero_banner .banner_inner_wrap h1 .transform_wrap span", {
        y: -250,
        scrollTrigger: {
          trigger: ".hero_banner",
          start: "100% 97%",
          end: "100% -300px",
          scroller: "[data-scroll-container]",
          scrub: true,
        },
      });
    }
    // let cardsLength = $(
    //     ".our_works_section .our_work_scroller .our_wok_slider_innerwrap .work_card"
    //   ).length,
    //   multiplier = 300;
    // let totalSCroll = cardsLength * multiplier;
    // if (
    //   $(".our_works_section .our_work_scroller .our_wok_slider_innerwrap")
    //     .length > 0
    // ) {
    //   gsap.to(
    //     ".our_works_section .our_work_scroller .our_wok_slider_innerwrap",
    //     {
    //       x: -totalSCroll,
    //       scrollTrigger: {
    //         trigger:
    //           ".our_works_section .our_work_scroller .our_wok_slider_innerwrap",
    //         start: "50% 50%",
    //         // ease: Bounce.easeOut,
    //         end: `+=${totalSCroll}`,
    //         scroller: "[data-scroll-container]",
    //         scrub: true,
    //         // pin:true,
    //       },
    //     }
    //   );
    // }

    $('form input[type="submit"]').click(function () {
      setTimeout(() => {
        locoScroll.update();
      }, 1500);
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  if ($(".hero_banner .banner_inner_wrap h1 .transform_wrap").length > 0) {
    gsap.to(".hero_banner .banner_inner_wrap h1 .transform_wrap ", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay: 4,
      scrollTrigger: {
        trigger: ".hero_banner .banner_inner_wrap h1 .transform_wrap ",
      },
    });
  }
  if ($(".hero_banner .banner_inner_wrap").length > 0) {
    gsap.to(
      ".hero_banner .banner_inner_wrap .banner_desc .banner_desc_wrap h3",
      {
        y: "0%",
        opacity: 1,
        delay: 5.2,
        // delay: 1.2,
        // stagger:.3,
        scrollTrigger: {
          trigger:
            ".hero_banner .banner_inner_wrap .banner_desc .banner_desc_wrap h3 ",
        },
      }
    );
    gsap.to(
      ".hero_banner .banner_inner_wrap .banner_desc .banner_desc_wrap .cta_btn",
      {
        y: "0%",
        opacity: 1,
        delay: 5.5,
        // stagger:.3,
        scrollTrigger: {
          trigger:
            ".hero_banner .banner_inner_wrap .banner_desc .banner_desc_wrap .cta_btn ",
        },
      }
    );
  }
  if ($(".about_intro").length > 0) {
    $(".about_intro .about_us_block .about_description p").each(function () {
      gsap.to($(this), {
        backgroundSize: "100% 100%",
        scrollTrigger: {
          trigger: $(this),
          start: "0% 80%",
          end: "100% 60%",
          scroller:
            window.screen.width > 1200
              ? "[data-scroll-container]"
              : document.body,
          scrub: true,
        },
      });
    });
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.querySelector("body").classList.add("stickyheader");
    } else {
      document.querySelector("body").classList.remove("stickyheader");
    }
  });
});
