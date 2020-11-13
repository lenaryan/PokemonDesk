import React from 'react';
import Footer from '../../components/Footer';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <>
      <main>Why so serious? {title}</main>
      <Footer />
    </>
  );
};

export default EmptyPage;
