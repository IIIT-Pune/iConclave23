import { Component } from "react";
import "./testcss.scss";
import gsap from "gsap"; // Import the entire GSAP library

class TestNav extends Component {
  componentDidMount() {
    var openTrigger = document.querySelector(".menu-trigger");
    var openTriggerTop = openTrigger.querySelector(".menu-trigger-bar.top");
    var openTriggerMiddle = openTrigger.querySelector(
      ".menu-trigger-bar.middle"
    );
    var openTriggerBottom = openTrigger.querySelector(
      ".menu-trigger-bar.bottom"
    );

    var closeTrigger = document.querySelector(".close-trigger");
    var closeTriggerLeft = closeTrigger.querySelector(
      ".close-trigger-bar.left"
    );
    var closeTriggerRight = closeTrigger.querySelector(
      ".close-trigger-bar.right"
    );

    var logo = document.querySelector(".logo");

    var menuContainer = document.querySelector(".menu-container");
    var menu = document.querySelector(".menu");
    var menuTop = document.querySelector(".menu-bg.top");
    var menuMiddle = document.querySelector(".menu-bg.middle");
    var menuBottom = document.querySelector(".menu-bg.bottom");

    var tlOpen = gsap.timeline({ paused: true });
    var tlClose = gsap.timeline({ paused: true });

    tlOpen
      .add("preOpen")
      .to(
        logo,
        0.4,
        {
          scale: 0.8,
          opacity: 0,
          ease: "power2.out",
        },
        "preOpen"
      )
      .to(
        openTriggerTop,
        0.4,
        {
          x: "+80px",
          y: "-80px",
          delay: 0.1,
          ease: "power4.in",
          onComplete: function () {
            closeTrigger.style.zIndex = "25";
          },
        },
        "preOpen"
      )
      .to(
        openTriggerMiddle,
        0.4,
        {
          x: "+=80px",
          y: "-=80px",
          ease: "power4.in",
          onComplete: function () {
            openTrigger.style.visibility = "hidden";
          },
        },
        "preOpen"
      )
      .to(
        openTriggerBottom,
        0.4,
        {
          x: "+=80px",
          y: "-=80px",
          delay: 0.2,
          ease: "power4.in",
        },
        "preOpen"
      )
      .add("open", "-=0.4")
      .to(
        menuTop,
        0.8,
        {
          y: "13%",
          ease: "power4.inOut",
        },
        "open"
      )
      .to(
        menuMiddle,
        0.8,
        {
          scaleY: 1,
          ease: "power4.inOut",
        },
        "open"
      )
      .to(
        menuBottom,
        0.8,
        {
          y: "-114%",
          ease: "power4.inOut",
        },
        "open"
      )
      .fromTo(
        menu,
        0.6,
        {
          y: 30,
          opacity: 0,
          visibility: "hidden",
        },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          ease: "power4.out",
        },
        "-=0.2"
      )
      .add("preClose", "-=0.8")
      .to(
        closeTriggerLeft,
        0.8,
        {
          x: "-=100px",
          y: "+=100px",
          ease: "power4.out",
        },
        "preClose"
      )
      .to(
        closeTriggerRight,
        0.8,
        {
          x: "+=100px",
          y: "+=100px",
          delay: 0.2,
          ease: "power4.out",
        },
        "preClose"
      );

    tlClose
      .add("close")
      .to(
        menuTop,
        0.2,
        {
          backgroundColor: "#6295ca",
          ease: "power4.inOut",
          onComplete: function () {
            logo.style.zIndex = "26";
            closeTrigger.style.zIndex = "5";
            openTrigger.style.visibility = "visible";
          },
        },
        "close"
      )
      .to(
        menuMiddle,
        0.2,
        {
          backgroundColor: "#6295ca",
          ease: "power4.inOut",
        },
        "close"
      )
      .to(
        menuBottom,
        0.2,
        {
          backgroundColor: "#6295ca",
          ease: "power4.inOut",
        },
        "close"
      )
      .to(
        menu,
        0.6,
        {
          y: 20,
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            menu.style.visibility = "hidden";
          },
        },
        "close"
      )
      .to(
        logo,
        0.8,
        {
          scale: 1,
          opacity: 1,
          ease: "power4.inOut",
        },
        "close",
        "+=0.2"
      )
      .to(
        menuTop,
        0.8,
        {
          y: "-113%",
          ease: "power4.inOut",
        },
        "close",
        "+=0.2"
      )
      .to(
        menuMiddle,
        0.8,
        {
          scaleY: 0,
          ease: "power4.inOut",
        },
        "close",
        "+=0.2"
      )
      .to(
        menuBottom,
        0.8,
        {
          y: "23%",
          ease: "power4.inOut",
          onComplete: function () {
            menuTop.style.backgroundColor = "#ffffff";
            menuMiddle.style.backgroundColor = "#ffffff";
            menuBottom.style.backgroundColor = "#ffffff";
          },
        },
        "close",
        "+=0.2"
      )
      .to(
        closeTriggerLeft,
        0.2,
        {
          x: "+=100px",
          y: "-=100px",
          ease: "power4.in",
        },
        "close"
      )
      .to(
        closeTriggerRight,
        0.2,
        {
          x: "-=100px",
          y: "-=100px",
          delay: 0.1,
          ease: "power4.in",
        },
        "close"
      )
      .to(
        openTriggerTop,
        1,
        {
          x: "-=80px",
          y: "+=80px",
          delay: 0.2,
          ease: "power4.out",
        },
        "close"
      )
      .to(
        openTriggerMiddle,
        1,
        {
          x: "-=80px",
          y: "+=80px",
          ease: "power4.out",
        },
        "close"
      )
      .to(
        openTriggerBottom,
        1,
        {
          x: "-=80px",
          y: "+=80px",
          delay: 0.1,
          ease: "power4.out",
        },
        "close"
      );

    // Events
    openTrigger.addEventListener("click", function () {
      if (tlOpen.progress() < 1) {
        tlOpen.play();
      } else {
        tlOpen.restart();
      }
    });

    closeTrigger.addEventListener("click", function () {
      if (tlClose.progress() < 1) {
        tlClose.play();
      } else {
        tlClose.restart();
      }
    });
  }

  render() {
    return (
      <div className="container">
        <span className="menu-trigger">
          <i className="menu-trigger-bar top"></i>
          <i className="menu-trigger-bar middle"></i>
          <i className="menu-trigger-bar bottom"></i>
        </span>
        <span className="close-trigger">
          <i className="close-trigger-bar left"></i>
          <i className="close-trigger-bar right"></i>
        </span>
        <span className="logo">
          <span>
            ⬢<i className="logo-title">UI</i>
            <i className="logo-badge">6</i>
          </span>
        </span>
        <div className="inner-container">
          <i className="menu-bg top"></i>
          <i className="menu-bg middle"></i>
          <i className="menu-bg bottom"></i>
          <div className="menu-container">
            <ul className="menu">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TestNav;
