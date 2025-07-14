import React from "react";
import Homepage from "../components/Homepage";
import NewDrops from "../components/NewDrops";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <div>
      <Homepage />
      <NewDrops />
      <Featured />
    </div>
  );
};

export default Home;
