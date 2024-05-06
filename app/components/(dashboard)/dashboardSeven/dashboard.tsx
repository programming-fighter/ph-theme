import React from "react";
import Aside from "./aside";

const Dashboard = () => {
  return (
    <div className="sm:container px-5 sm:py-10 py-5">
      <div className="md:grid md:grid-cols-3 gap-6">
        <Aside />
        {/* <div className="md:col-span-2">
          <Outlet />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
