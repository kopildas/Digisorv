import React from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Achieved from "../../components/Achieved/Achieved";
import Customer_Review from "../../components/Customer_Review/Customer_Review";
import { Get_in_touch } from "../../components/Get_in_touch/Get_in_touch";
import Transition from "../../components/Page_transition/Transition";

function Home() {
  return (
    <Transition>
      <div className="">
        <Hero />
        <Services />
        <Achieved />
        <Customer_Review />
        <Get_in_touch />
      </div>
    </Transition>
  );
}

export default Home;
