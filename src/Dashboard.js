import React from "react";
import useAuth from "./useAuth";
import RecommendMe from "./RecommendMe";
import RecommendOthers from "./RecommendOthers";

const Dashboard = ({ code }) => {

  useAuth(code);

  return (
    <div>
    <RecommendMe />
    <RecommendOthers />
  </div>
  );
};

export default Dashboard;