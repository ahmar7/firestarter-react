import React from "react";
import Header from "../layout/Header/header";
import TopBanner from "../components/HomeComponents/TopBanner/TopBanner";
import BelowBanner from "../components/HomeComponents/BelowBanner/BelowBanner";
import Features from "../components/HomeComponents/Features/Features";
import Advantages from "../components/HomeComponents/AdvantagesSection/Advantages";
import Description from "../components/HomeComponents/DescriptionSection/Description";
import GetReady from "../components/HomeComponents/GetReadySection/GetReady";
import Tiers from "../components/HomeComponents/TiersSection/Tiers";
import TimeWrap from "../components/HomeComponents/TimeWrap/TimeWrap";
import Faq from "../components/HomeComponents/Faq/Faq";
import Footer from "../layout/Footer/Footer";
import Carousel from "../components/HomeComponents/UpComingProjects/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homepage page">
        <TopBanner />
        <BelowBanner />
        <Features />
        <Carousel />
        <Advantages />
        <Description />
        <GetReady />
        <Tiers />
        <TimeWrap />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
