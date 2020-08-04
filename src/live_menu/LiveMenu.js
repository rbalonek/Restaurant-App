import React, { useRef, useEffect, useState } from "react";
import "./LiveMenu.css";

/// Menu Components
import GuestMenuItem from "./Guest_Components/GuestMenuItem";
import GuestDrinkItem from "./Guest_Components/GuestDrinkItem";

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

export default function LiveMenu(props) {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const appRef = useRef(null);
  const MainsRef = useRef(null);
  const drinksRef = useRef(null);
  const alcoholDrinksRef = useRef(null);

  const sectionRefs = [
    { section: "apps", ref: appRef },
    { section: "mains", ref: MainsRef },
    { section: "drinks", ref: drinksRef },
    { section: "alcoholDrinks", ref: alcoholDrinksRef },
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
    <div>
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
                Apps
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
                Mains
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
                Drinks
              </button>

              <button
                type="button"
                className={`header_link ${
                  visibleSection === "alcoholDrinks" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(alcoholDrinksRef.current);
                }}
              >
              Wine / Cocktails
              </button>
            </div>
          </div>

          <div className="section" id="apps" ref={appRef}>
            <h1 className="menu-titles">Apps</h1>
            {props.apps.map((app) => (
              <GuestMenuItem key={app.id} item={app} type="app" />
            ))}
          </div>

          <div className="section" id="mains" ref={MainsRef}>
            <h1 className="menu-titles">Mains</h1>
            {props.mains.map((main) => (
              <GuestMenuItem key={main.id} item={main} type="main" />
            ))}
          </div>

          <div className="section" id="drinks" ref={drinksRef}>
            <h1 className="menu-titles">Drinks</h1>
            {props.drinks.map((drink) => (
              <GuestDrinkItem key={drink.id} item={drink} type="drink" />
            ))}
          </div>
          <div className="section" id="alcoholDrinks" ref={alcoholDrinksRef}>
          <h1 className="menu-titles">Wine / Cocktails</h1>
          {props.alcoholDrinks.map((alcoholDrink) => (
            <GuestDrinkItem
              key={alcoholDrink.id}
              item={alcoholDrink}
              type="alcoholDrink"
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
//alcoholDrinks