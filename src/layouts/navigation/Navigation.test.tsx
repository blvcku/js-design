import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navigation from './Navigation';

describe(`Navigation component`, () => {
    let expandableContent: HTMLElement;
    let hamburgerButton: HTMLElement;
    let collapseButton: HTMLElement;

    beforeEach(() => {
        render(<Navigation />);
        expandableContent = screen.getByTestId(`navigation-expandable-content`);
        hamburgerButton = screen.getByLabelText(`Open navigation`);
        collapseButton = screen.getByLabelText(`Close navigation`);
    });

    test(`navigation content is not visible when navigation loads on page`, () => {
        expect(hamburgerButton).toBeVisible();
        expect(hamburgerButton).toHaveAttribute(`aria-expanded`, `false`);
        expect(expandableContent).not.toBeVisible();
        expect(collapseButton).not.toBeVisible();
    });

    test(`navigation expands and reveals content upon clicking the hamburger button`, () => {
        fireEvent.click(hamburgerButton);

        expect(hamburgerButton).toHaveAttribute(`aria-expanded`, `true`);
        expect(expandableContent).toBeVisible();
        expect(collapseButton).toBeVisible();
    });

    test(`navigation content collapses upon clicking the closing button`, () => {
        fireEvent.click(hamburgerButton);
        fireEvent.click(collapseButton);

        expect(hamburgerButton).toHaveAttribute(`aria-expanded`, `false`);
        expect(expandableContent).not.toBeVisible();
        expect(collapseButton).not.toBeVisible();
    });

    test(`navigation content collapses when click occurs outside of the navigation`, async () => {
        const testId = `outside-element`;
        render(<div data-testid={testId}></div>);
        const outsideElement = screen.getByTestId(testId);

        // Open the navigation
        fireEvent.click(hamburgerButton);

        // Click outside of the navigation
        fireEvent.mouseDown(outsideElement);

        await waitFor(() => {
            expect(hamburgerButton).toHaveAttribute(`aria-expanded`, `false`);
        });
        expect(expandableContent).not.toBeVisible();
        expect(collapseButton).not.toBeVisible();
    });
});
