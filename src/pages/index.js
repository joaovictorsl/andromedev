import React from 'react'
import Layout from "../components/layouts/layout";
import ScreenImage from '../assets/svg/ScreenImage.svg'

const Home = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center">
        <article className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-10">
          <div className="xl:max-w-lg xl:mx-auto">
            <img
              className="mt-6 sm:mt-8 sm:w-full lg:hidden"
              src={ScreenImage}
              alt="Margarete"
            />
            <h1 className="mt-6 text-3xl sm:text-5xl font-bold text-white leading-tight">
              Andromedev
            </h1>
            <p className="mt-5 text-white sm:text-xl">
              With Game Slot, you can review games you've played on Steam, read other people opinions, create a personal wishlist with the games you're willing to play and build a lovely community of game lovers!
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
      </div>
    </Layout>
  )
}

export default Home
