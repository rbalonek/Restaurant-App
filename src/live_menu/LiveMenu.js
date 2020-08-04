import React, { useRef, useEffect, useState } from "react";
import "./LiveMenu.css"

/// Menu Components
import GuestMenuItem from "./Guest_Components/GuestMenuItem"
import GuestDrinkItem from "./Guest_Components/GuestDrinkItem"


const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


export default function LiveMenu(props) {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const leadershipRef = useRef(null);
  const providerRef = useRef(null);
  const operationsRef = useRef(null);

  const sectionRefs = [
    { section: "Leadership", ref: leadershipRef },
    { section: "Providers", ref: providerRef },
    { section: "Operations", ref: operationsRef },
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
            className={`header_link ${visibleSection === "Leadership" ? "selected" : ""}`}
            onClick={() => {
              scrollTo(leadershipRef.current);
            }}
          >
            Apps
          </button>
          <button
            type="button"
            className={`header_link ${visibleSection === "Providers" ? "selected" : ""}`}
            onClick={() => {
              scrollTo(providerRef.current);
            }}
          >
            Mains
          </button>
          <button
            type="button"
            className={`header_link ${visibleSection === "Operations" ? "selected" : ""}`}
            onClick={() => {scrollTo(operationsRef.current);}}>
            Drinks
          </button>
        </div>
      </div>
      
      
   
  
  <div className="section" id="Leadership" ref={leadershipRef}>
        <h1 className="menu-titles">Apps</h1>
      {props.apps.map((app) => <GuestMenuItem key={app.id} item={app} type="app" />)}
      </div>
      
      <div className="section" id="Providers" ref={providerRef}>
        <h1 className="menu-titles">Mains</h1>
      {props.mains.map((main) => <GuestMenuItem key={main.id} item={main} type="main" />)}
      </div>

      <div className="section" id="Operations" ref={operationsRef}>
        <h1 className="menu-titles">Drinks</h1>
      {props.drinks.map((drink) => <GuestDrinkItem key={drink.id} item={drink} type="drink" />)}
      </div>

      
      <h1 className="menu-titles">Wine / Cocktails</h1>
        {props.alcoholDrinks.map((alcoholDrink) => <GuestDrinkItem key={alcoholDrink.id} item={alcoholDrink} type="alcoholDrink" />)}
          
    </div>

    </div>
    </div>
  )
}
