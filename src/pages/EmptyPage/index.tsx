import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <>
      <Header />
      <main>Why so serious? {title}</main>
      <Footer />
    </>
  );
};

export default EmptyPage;
