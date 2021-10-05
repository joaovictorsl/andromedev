import type { QueryOptions } from '@prismicio/client/types/ResolvedApi'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import SliceZone from '../components/home/SliceZone'
import ScheduleCard from '../components/home/ScheduleCard'

import { Client } from '../lib/prismic'
import { Stack } from '@chakra-ui/layout'

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
  const { ref } = previewData as QueryOptions
  const client = Client()

  const doc = (await client.getSingle('homepage', ref ? { ref } : {})) || {}

  return {
    props: {
      doc,
    },
  }
}

const Home: NextPage = ({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Home - Andromedev</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {doc.data.body.map((slice: unknown, idx: number) => (
      <SliceZone key={idx} slice={slice} />
    ))}
  </>
)

export default Home
