import React from 'react';
import Layout from './src/components/layout/layout/Layout';
import { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
}) => {
    return <Layout>{element}</Layout>;
};
