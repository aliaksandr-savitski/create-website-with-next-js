import CONFIG from '@config';
import ogImage from '@assets/images/opengraph-placeholder-1200x630.png';

const TITLE = 'Company Name';
const DESCRIPTION = 'Company SEO description text';

export default {
  title: TITLE,
  description: DESCRIPTION,
  canonical: CONFIG.self.url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: CONFIG.self.url,
    site_name: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Primary Open Graph Image',
      },
    ],
  },
  twitter: {
    handle: '@estateplanstn',
    site: '@estateplanstn',
    cardType: 'summary_large_image',
  },
};
