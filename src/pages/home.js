import React from "react";
import Header from "../layout/Header/header";
import TopBanner from "../components/TopBanner/TopBanner";
import BelowBanner from "../components/BelowBanner/BelowBanner";
import Features from "../components/Features/Features";
import Slider from "../components/UpComingProjects/Slider";
import Advantages from "../components/AdvantagesSection/Advantages";
import Description from "../components/DescriptionSection/Description";
import GetReady from "../components/GetReadySection/GetReady";
import Tiers from "../components/TiersSection/Tiers";
import TimeWrap from "../components/TimeWrap/TimeWrap";
import Faq from "../components/Faq/Faq";
import Footer from "../layout/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homepage page">
        <TopBanner />
        <BelowBanner />
        <Features />
        <Slider />
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
