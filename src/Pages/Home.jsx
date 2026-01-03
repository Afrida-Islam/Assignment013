import React from "react";
import Hero from "../Components/Hero";
import FeatureSection from "../Components/LandingPage";
import EarningPlatforms from "../Components/EarningPlatforms";

import LandingPage from "../Components/RevmeLandingPage";
import RevmeLanding from "../Components/RevmeLandingPage";
import EarningLandingPage from "../Components/EarningLandingPage";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <EarningPlatforms></EarningPlatforms>
      <FeatureSection></FeatureSection>
      <EarningLandingPage></EarningLandingPage>
      <RevmeLanding></RevmeLanding>
    </div>
  );
};

export default Home;
