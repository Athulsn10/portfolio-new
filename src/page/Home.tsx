import { useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Socials from "../components/Socials";

interface MousePosition {
  x: number;
  y: number;
}

function Home() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isInverted, setIsInverted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Use clientX and clientY for viewport-relative positioning
    setMousePosition({ x: e.clientX, y: e.clientY });
    const target = e.target as HTMLElement;
    const isOverInvertElement = target.closest(".invert-cursor") !== null;
    setIsInverted(isOverInvertElement);
  };

  // Hide cursor when mouse leaves the window
  const handleMouseLeave = () => {
    setMousePosition({ x: -100, y: -100 }); // Move cursor off-screen
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        className="vh-100"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{ cursor: "none", position: "relative", minHeight: "100vh" }}
      >
        <div className="home-bg p-3">
          <div className="row">
            <div
              className="container-fluid rounded-5 mt-2 col-lg-10 col-md-10 col-sm-12"
              style={{ background: "#fff" }}
            >
              <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-6">
                  <Profile />
                </div>
                <div className="col-sm-12 col-lg-8 col-md-6">
                  <About />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 mt-2 ps-lg-2 p-0">
              <div
                className="flex-column d-flex justify-content-center text-dark rounded-5 w-100 h-100 p-3 invert-cursor"
                style={{ background: "#ff3904" }}
              >
                <Socials />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-lg-7 col-md-6 col-sm-12 py-4 p-0 pe-1"
              style={{ height: "330px" }}
            >
              <Experience />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 rounded-5 bg-light">
              <Skills />
            </div>
          </div>
          <div className="mt-5">
            <Projects />
          </div>
          <div className="mt-5">
            <div className="container-fluid">
              <hr />
              <p
                style={{ overflowY: "hidden" }}
                className="head text-center mt-5 fs-3 urbanist fw-bold text-light invert-cursor"
              >
                Thank You For Scrolling{" "}
                <i className="icon fa-solid fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`home-custom-cursor ${isInverted ? "invert" : ""}`}
          style={{
            position: "fixed",
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
      </div>
    </>
  );
}

export default Home;