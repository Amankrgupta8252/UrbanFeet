import React from "react";
import HomeScreen from "./HomeScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Models from "./Models";
import Company_Name from "./CompanyName";
import FeatureProduct from "./FeatureProduct";
import FeedbackSection from "./Feedback";
import LatestNews from "./LatestNews";
import Popup from "../LogInPopup/Popup";


export default function Screen() {
  return (
    <div>
      <>
        <Navbar />
        <HomeScreen />
        <Models />
        <Company_Name />
        <FeatureProduct />

        <FeedbackSection />
        <LatestNews />
        
        <Footer />
        <Popup/>
        {/* <LoginPopup/> */}
        {/* <RegiPopup/> */}
      </>

    </div>
  );
}
