import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = 'AI For Finance Professionals';
const DEFAULT_TITLE = 'AI For Finance Professionals | Automate Reporting, Analysis & Forecasting';
const DEFAULT_DESCRIPTION = 'Learn how to automate financial reporting, analysis, and forecasting with AI. A practical guide for accountants, analysts, and CFOs. Get instant access today.';
const DEFAULT_OG_IMAGE = 'https://i.ibb.co/tMrYK8zM/AI-For-Finance-Professionals-1-1.png';
const BASE_URL = 'https://aifinanceforprofessionals.com';

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = `${BASE_URL}/`,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  structuredData,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (Array.isArray(structuredData) ? structuredData : [structuredData]).map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
