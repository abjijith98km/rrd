gsap.registerPlugin(ScrollTrigger);

if (window.screen.width > 1200) {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.1,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

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
  $(".about_intro .about_us_block .about_description p").each(function () {
    gsap.to($(this), {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: $(this),
        start: "0% 80%",
        end: "100% 80%",
        scroller: "[data-scroll-container]",
        scrub: true,
      },
    });
  });
  gsap.from('.full_width_banner .inner_wrap',{
    backgroundSize: "200%",
    scrollTrigger: {
      trigger: '.full_width_banner .inner_wrap',
      start: "0% 100%",
      end: "100% 0%",
      scroller: "[data-scroll-container]",
      scrub: true,
      // pin:true,
    },
  })
  gsap.to('.hero_banner .banner_inner_wrap h1 .transform_wrap span',{
    y: "0%",
    stagger:.3,
    scrollTrigger: {
      trigger: '.hero_banner .banner_inner_wrap h1 .transform_wrap span',
    },
  })
  // gsap.to('.hero_banner .banner_inner_wrap h1 .transform_wrap span',{
  //   y: "0%",
  //   stagger:.3,
  //   scrollTrigger: {
  //     trigger: '.hero_banner .banner_inner_wrap h1 .transform_wrap span',
  //   },
  // })

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
