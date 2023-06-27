import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import {Chooseus} from '@/components/HomepageComp/Chooseus'
import Cta from '@/components/HomepageComp/Cta'
import {Faq} from '@/components/HomepageComp/Faq'
import Newsletter from '@/components/HomepageComp/Newsletter'
import PopularCourses from '@/components/HomepageComp/PopularCourses'
import Stats from '@/components/HomepageComp/Stats'
import { Testimonials } from '@/components/HomepageComp/Testimonials'
import Welcome from '@/components/HomepageComp/Welcome'
import Head from 'next/head'

// issues
// There's an issue with the mobile nav ooo, make sure u fix it

export default function Home() {
  return (
    <>
      <Head>
        <title>Vephla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Stats />
      <PopularCourses />
      <Welcome />
      <Chooseus />
      <Testimonials />
      <Faq />
      <Cta />
      <Newsletter />
    </>
  )
}
