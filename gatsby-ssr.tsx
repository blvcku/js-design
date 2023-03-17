import GlobalLayout from '@/components/layout/global-layout/GlobalLayout';
import { GatsbySSR } from 'gatsby';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
    return <GlobalLayout>{element}</GlobalLayout>;
};
