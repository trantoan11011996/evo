import React from "react";
import TopBgComponent from "../components/content/topBg/topBg.component";
import TopBgContainer from "../containers/content/topBg/topBg.container";
import FeaturesContainer from "../containers/content/features/Features.container";
import AboutContainer from "../containers/content/about/About.container";
import ProjectContainer from "../containers/content/project/Project.container";
import TechnologyContainer from "../containers/content/technology/Technology.container";
import PartnerContainer from "../containers/content/partner/Partner.container";
export interface Props {
  openSidebar: any;
}
function HomePageComponent({ openSidebar }: any) {
  return (
    <div className="home-container">
      <TopBgContainer openSidebar={openSidebar} />
      <FeaturesContainer />
      <AboutContainer />
      <ProjectContainer />
      <TechnologyContainer />
      <PartnerContainer />
    </div>
  );
}

export default HomePageComponent;
