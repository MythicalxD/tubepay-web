// SchemaOrg.js

import React from 'react';

const SchemaOrg = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://tubepay.live",
        "name": "Tubepay Official website"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default SchemaOrg;
