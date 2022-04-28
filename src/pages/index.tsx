import type { QueryOptions } from '@prismicio/client/types/ResolvedApi'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/common/Footer'
import Navbar from '../components/header/Navbar'
import SliceZone from '../components/home/SliceZone'
import { Main } from '../components/main'

import { Client } from '../lib/prismic'

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
  const { ref } = previewData as QueryOptions
  const client = Client()

  const docHomepage =
    (await client.getSingle('homepage', ref ? { ref } : {})) || {}
  const docHeader = (await client.getSingle('header', ref ? { ref } : {})) || {}
  const docFooter = (await client.getSingle('footer', ref ? { ref } : {})) || {}

  return {
    props: {
      docHomepage,
      docHeader,
      docFooter,
    },
  }
}

const Home: NextPage = ({
  docHomepage,
  docFooter,
  docHeader,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Home - Andromedev</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar cmsNavitems={docHeader.data.navitems} />

    <Main>
      {docHomepage.data.body.map((slice: unknown, idx: number) => (
        <SliceZone key={idx} slice={slice} />
      ))}
      <Footer />
    </Main>
  </>
)

export default Home
