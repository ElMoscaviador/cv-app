import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header/Header";
import SideImage from "./SideImage/SideImage";

const Frame = ({ currentSectionName, children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const sideImageDisplayed =
    currentSectionName !== "Review" && currentSectionName !== "Download";
  const isSmallScreen = useMediaQuery("(max-width:1200px)");
  const backgroundImage = require(`../../../assets/backgrounds/${currentSectionName}_${
    darkTheme ? "dark" : "light"
  }.jpg`);

  return (
    <div className="frame" aria-label="frame">
      <Header
        backgroundImage={backgroundImage}
        currentSectionName={currentSectionName}
        isSmallScreen={isSmallScreen}
      />
      <div
        className={`section-and-side section-and-side_${currentSectionName}`}
      >
        {children}
        {!isSmallScreen && sideImageDisplayed && (
          <SideImage
            backgroundImage={backgroundImage}
            currentSectionName={currentSectionName}
          />
        )}
      </div>
    </div>
  );
};

export default Frame;
