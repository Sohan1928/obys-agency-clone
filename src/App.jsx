import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const App = () => {
  const locoScrollRef = useRef(null);

  useGSAP(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      multiplier: 1.5,
      lerp: 0.1,
    });

    // Locomotive Scroll + ScrollTrigger Sync
    locoScrollRef.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScrollRef.current.scrollTo(value, 0, 0)
          : locoScrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const Cursor = document.querySelector("#Cursor");
    // cursor animation
    function customCursorMake() {
      document.addEventListener("mousemove", function (event) {
        gsap.to(Cursor, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      // Hide cursor when mouse leaves the window
      document.addEventListener("mouseleave", function () {
        gsap.to(Cursor, {
          opacity: 0,
          duration: 0.3,
        });
      });

      // Show cursor when mouse enters the window
      document.addEventListener("mouseenter", function () {
        gsap.to(Cursor, {
          opacity: 1,
          duration: 0.3,
        });
      });
    }
    customCursorMake();

    const tl = gsap.timeline();
    // loader animation
    function loader() {
      tl.from("#loader h3", {
        opacity: 0,
        x: 60,
        duration: 1.6,
        stagger: 0.3,
      });
      tl.to("#loader h3", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: 0.1,
      });
      tl.to("#loader", {
        opacity: 0,
      });
      tl.to("#loader", {
        display: "none",
      });
    }
    loader();

    // Refresh ScrollTrigger after Locomotive Scroll setup
    ScrollTrigger.addEventListener("refresh", () =>
      locoScrollRef.current.update()
    );
    ScrollTrigger.refresh();

    return () => {
      locoScrollRef.current.destroy();
      ScrollTrigger.removeEventListener("refresh", () =>
        locoScrollRef.current.update()
      );
    };
  }, []);

  return (
    <div className="overflow-x-hidden cursor-none">
      {/* loader animation */}
      <div
        id="loader"
        className="h-screen w-screen fixed top-0 bg-[#000] z-50 flex flex-col pl-32 font-silk-serif-light-italic items-start justify-center text-white gap-1 text-6xl font-bold uppercase "
      >
        <h3>Your</h3>
        <h3>Web Experience</h3>
        <h3>is Loading Right Now...</h3>
      </div>
      <div
        id="Cursor"
        className="rounded-full bg-transparent z-50 h-10 w-10 text-center flex items-center justify-center border border-[#DDDDDD] fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        id="main"
        className="bg-[#151515] h-screen w-screen relative text-white"
      >
        <div className="px-16 py-8">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="text-white">
            <Banner></Banner>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
