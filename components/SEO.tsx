// components/SEO.tsx
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    canonical: string;
    structuredData?: object[];
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, structuredData }) => {
    const defaultProps: DefaultSeoProps = {
        title,
        description,
        canonical,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: canonical,
            title,
            description,
            images: "https://i.imgur.com/wAjxKob.png" ? [{ url: "https://i.imgur.com/wAjxKob.png", alt: title }] : [],
        },
        twitter: {
            cardType: 'summary_large_image',
        },
    };

    return (
        <>
            <DefaultSeo {...defaultProps} />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
        </>
    );
};

export default SEO;
