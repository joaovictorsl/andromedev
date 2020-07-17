import React from "react";

import EventSchedule from "../components/eventSchedule";
import Layout from "../components/layouts/layout";

const Cronograma = () => {
  return (
    <Layout title="Cronograma" className="bg-gray-100">
      <h1 id="full" className="text-center mb-8 font-bold text-purple-800 sm:text-lg md:text-xl lg:text-5xl xl:text-5xl ">
        Cronograma
      </h1>
      <div className="flex justify-center">
        <EventSchedule className="w-1/2" full />
      </div>
    </Layout>
  );
};

export default Cronograma;
