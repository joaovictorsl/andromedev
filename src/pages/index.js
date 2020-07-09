import React from "react";
import Layout from "../components/layouts/layout";
import ScreenImage from "../assets/svg/margarete.svg";

const Home = () => {
  return (
    <Layout>
      <section className="flex w-full justify-center linear my-8">
        <article className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-10">
          <div className="xl:max-w-lg xl:mx-auto">
            <img
              className="mt-6 sm:mt-8 sm:w-full lg:hidden"
              src={ScreenImage}
              alt="Margarete"
            />
            <h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-tight text-orange">
              Andromedev
            </h1>
            <p className="mt-5 text-white sm:text-xl">
              O primeiro evento
            </p>
          </div>
        </article>
        <div className="hidden lg:block xl:mr-20 lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full"
            src={ScreenImage}
            alt="Margarete"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
