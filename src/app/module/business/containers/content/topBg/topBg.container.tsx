import React, { Fragment } from "react";
import TopBgComponent from "../../../components/content/topBg/topBg.component";
export interface Props {
  openSidebar: any;
}
function TopBgContainer({ openSidebar }: any) {
  return (
    <Fragment>
      <TopBgComponent openSidebar={openSidebar} />
    </Fragment>
  );
}

export default TopBgContainer;
