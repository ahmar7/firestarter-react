import React from "react";
import Header from "../layout/Header/header";
import TopBanner from "../components/TopBanner/TopBanner";
import BelowBanner from "../components/BelowBanner/BelowBanner";
import Features from "../components/Features/Features";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homepage page">
        <TopBanner />
        <BelowBanner />
        <Features />
      </div>
    </div>
  );
};

export default Home;
