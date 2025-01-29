import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Ingredients } from "./components/ingredients";
import { Contact } from "./components/contact";
import { Title } from "./components/title";

import { Banner } from "./components/banner";
import { Mission } from "./components/mission";
import { Nature } from "./components/nature";
import { Footer } from "./components/footer";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Ingredients data={landingPageData.Ingredients}/>
      
      <Banner data={landingPageData.Banner} />

      <Mission data={landingPageData.Mission}/>

      <Title data={landingPageData.Title} />

      <Contact data={landingPageData.Contact} />


      <Nature data={landingPageData.Nature}/>


      <Footer data={landingPageData.Footer} />

    </div>
  );
};

export default App;
