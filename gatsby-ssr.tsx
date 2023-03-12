import React from 'react';
import Layout from './src/components/layout/layout/Layout';
import { GatsbySSR } from 'gatsby';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
    return <Layout>{element}</Layout>;
};
