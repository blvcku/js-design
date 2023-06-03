import DefaultLayout from '@/layouts/default-layout/DefaultLayout';
import type { GatsbySSR, GatsbyBrowser } from 'gatsby';

const wrapPageElement: GatsbySSR['wrapPageElement'] &
    GatsbyBrowser['wrapPageElement'] = ({ element }) => {
    return <DefaultLayout>{element}</DefaultLayout>;
};

export default wrapPageElement;
