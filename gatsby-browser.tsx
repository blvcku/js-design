import GlobalLayout from '@/components/layout/global-layout/GlobalLayout';
import { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
}) => {
    return <GlobalLayout>{element}</GlobalLayout>;
};
