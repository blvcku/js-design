import useSiteMetadata from './useSiteMetadata';
import SiteMetadataProvider from './SiteMetadataContext';
import { renderHook, render } from '@testing-library/react';
import { vi } from 'vitest';
import * as gatsby from 'gatsby';
import siteMetadata from '@/gatsby/siteMetadata';
import expectToThrow from '@/__tests__/utils/expectToThrow';

describe(`SiteMetadata context`, async () => {
    const siteMetadataMockData = {
        site: {
            siteMetadata,
        },
    };
    vi.spyOn(gatsby, `useStaticQuery`).mockImplementation(
        () => siteMetadataMockData,
    );

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe(`useSiteMetadata hook`, () => {
        it(`returns site metadata when used within SiteMetadataProvider`, () => {
            const { result } = renderHook(() => useSiteMetadata(), {
                wrapper: SiteMetadataProvider,
            });

            expect(result.current).toEqual(
                siteMetadataMockData.site.siteMetadata,
            );
        });

        it(`throws error when used outside of SiteMetadataProvider`, () => {
            expectToThrow(
                () => renderHook(() => useSiteMetadata()),
                Error(`useSiteMetadata must be within SiteMetadataProvider`),
            );
        });
    });

    it(`throws error when fetching site metadata failed`, () => {
        // mock useStaticQuery without data
        vi.spyOn(gatsby, `useStaticQuery`).mockImplementation(() => ({}));

        expectToThrow(
            () => render(<SiteMetadataProvider />),
            Error(`Site metadata not found`),
        );
    });
});
