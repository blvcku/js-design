import React from 'react';
import GlobalLayout from './src/components/layout/global-layout/GlobalLayout';
import { GatsbySSR } from 'gatsby';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
    return <GlobalLayout>{element}</GlobalLayout>;
};
