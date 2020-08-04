import React, { useRef, useEffect, useState } from "react";
import "./NavTry.css";

import { Route } from "react-router-dom";
import LiveMenu from "./LiveMenu";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const appRef = useRef(null);
  const MainsRef = useRef(null);
  const drinksRef = useRef(null);

  const sectionRefs = [
    { section: "apps", ref: appRef },
    { section: "mains", ref: MainsRef },
    { section: "drinks", ref: drinksRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <div className="App">
      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "apps" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(appRef.current);
              }}
            >
              apps
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "mains" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(MainsRef.current);
              }}
            >
              mains
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "drinks" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(drinksRef.current);
              }}
            >
              drinks
            </button>
          </div>
        </div>
      </div>

      <Route>
        <LiveMenu appRef={appRef} MainsRef={MainsRef} drinksRef={drinksRef} />
      </Route>
    </div>
  );
}

export default App;

// <div className="section" id="apps" ref={appRef} />
//         <div className="section" id="mains" ref={MainsRef} />
//         <div className="section" id="drinks" ref={drinksRef} />
