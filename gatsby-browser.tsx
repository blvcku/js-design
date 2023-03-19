import Layout from '@/components/layout/layout/Layout';
import { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
}) => {
    return <Layout>{element}</Layout>;
};
