import React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Hero from './components/hero'
import Content from './components/content'

const Landing: NextPage = (props) => {
  return (
    <Layout>
      <Header />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Content />
        </section>
      </main>
    </Layout>
  )
}

export default Landing