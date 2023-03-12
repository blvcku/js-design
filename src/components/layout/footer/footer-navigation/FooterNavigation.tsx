import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FooterNavigationContainer, FooterNavigationLinkWrapper, FooterNavigationLinksContainer } from './FooterNavigation.styles';
import { FooterNavigationLinks } from './FooterNavigation.types';

const footerNavigationLinks: FooterNavigationLinks = [
    {
        name: 'Landing page',
        to: '/'
    },
    {
        name: 'Skills',
        to: '/'
    },
    {
        name: 'I Create...',
        to: '/'
    },
    {
        name: 'Projects',
        to: '/#projects'
    },
    {
        name: 'Contact',
        to: '/#contact'
    }
]

const FooterNavigation:React.FC = () => {
    return(
        <FooterNavigationContainer>
            <h2>Jacek Szczypior</h2>
            <h3>Graphic Designer</h3>
            <FooterNavigationLinksContainer>
                {footerNavigationLinks.map(({ name, to }) => (
                    <FooterNavigationLinkWrapper key={name}>
                        <AnchorLink to={to}>{name}</AnchorLink>
                    </FooterNavigationLinkWrapper>
                ))}
            </FooterNavigationLinksContainer>
        </FooterNavigationContainer>
    )
}

export default FooterNavigation;