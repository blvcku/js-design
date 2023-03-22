import Layout from '@/components/layout/layout/Layout';
import { GatsbySSR, GatsbyBrowser } from 'gatsby';

const wrapPageElement: GatsbySSR['wrapPageElement'] &
    GatsbyBrowser['wrapPageElement'] = ({ element }) => {
    return <Layout>{element}</Layout>;
};

export default wrapPageElement;
