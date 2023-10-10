import React from "react";

const HeroImage = () => {
  return (
      <picture>
        <source media="(min-width: 840px)" srcSet="./images/illustration-sign-up-desktop.svg" />
        <img src="./images/illustration-sign-up-mobile.svg" alt="Hero svg" />
      </picture>
  );
};

export default HeroImage;
