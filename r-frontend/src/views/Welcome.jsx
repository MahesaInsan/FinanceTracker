import React from 'react'
import Layout from '../layouts/Layout'
import Tops from '../components/welcomeComponents/Tops'
import '../index.css'
import Why from '../components/welcomeComponents/Why'
import Offer from '../components/welcomeComponents/Offer'

export default function Welcome() {
 return (
    <Layout>
        <Tops />
        <Why />
        <Offer />
    </Layout>
  )
}
