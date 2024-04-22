import React from "react";
import HeaderTop from "./header-top";

const HeaderOne = ({ headerSetting, design }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <HeaderTop headerSetting={headerSetting} design={design} />
      {/* <HeaderDown /> */}
      {/* <HeaderMid /> */}
    </div>
  );
};

export default HeaderOne;
