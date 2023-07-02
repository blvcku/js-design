import { vi } from 'vitest';
import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
} from '@testing-library/react';
import { navigate } from 'gatsby';
import DefaultLayout from './DefaultLayout';
import PageTransitionLink from '@/components/unstyled-components/page-transition-link/PageTransitionLink';
import PageTransitionProvider from '@/contexts/page-transition-context/PageTransitionContext';
import SiteMetadataProvider from '@/contexts/site-metadata-context/SiteMetadataContext';
import pageTransitionConfig from '../page-transition/PageTransition.config';

describe(`DefaultLayout component`, () => {
    const linkText = `link text`;
    const linkDestination = `/test`;
    const getTotalLengthMock = vi.fn(() => 100);
    Object.defineProperty(SVGElement.prototype, `getTotalLength`, {
        value: getTotalLengthMock,
        writable: true,
    });
    beforeEach(() => {
        render(
            <PageTransitionProvider>
                <SiteMetadataProvider>
                    <DefaultLayout>
                        <PageTransitionLink to={linkDestination}>
                            {linkText}
                        </PageTransitionLink>
                    </DefaultLayout>
                </SiteMetadataProvider>
            </PageTransitionProvider>,
        );
    });

    test(`page transition appears correctly upon clicking the page transition link`, async () => {
        const pageTransitionLinkElement = screen.getByText(linkText);

        fireEvent.click(pageTransitionLinkElement);

        const pageTransitionElement = screen.queryByTestId(`page-transition`);
        expect(pageTransitionElement).toBeInTheDocument();
        expect(pageTransitionElement).toBeVisible();

        await act(async () => {
            await new Promise((resolve) =>
                setTimeout(resolve, pageTransitionConfig.entryDurationMs),
            );
        });

        expect(navigate).toHaveBeenCalledWith(linkDestination);
        expect(navigate).toHaveBeenCalledTimes(1);

        await act(async () => {
            await new Promise((resolve) =>
                setTimeout(
                    resolve,
                    pageTransitionConfig.animationDurationMs +
                        pageTransitionConfig.exitDurationMs,
                ),
            );
        });

        await waitFor(() => {
            expect(pageTransitionElement).not.toBeVisible();
        });
        expect(pageTransitionElement).not.toBeInTheDocument();
    });
});
