// components/SEO.tsx
"use client";

import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://i.imgur.com/wAjxKob.png" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
