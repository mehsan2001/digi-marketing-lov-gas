import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import Testimonials from '@/components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;