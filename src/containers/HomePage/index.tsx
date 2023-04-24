import React from 'react';
import { Header } from './components/Header';
import { Partners } from './components/Partners';
import { Layout } from 'components/Layout';
import { HowItWorks } from './components/HowItWorks';
import { Questions } from './components/Questions';
import { Promo } from './components/Promo';
import { Footer } from './components/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Partners />
        <HowItWorks />
        <Questions />
        <Promo />
        <Footer />
      </Layout>
    </>
  );
};
