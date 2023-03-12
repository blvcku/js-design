import styled from "styled-components";

export const FooterNavigationContainer = styled.nav`
    text-align:end;
    & > h2{
        font-size:var(--fs-lg);
        font-weight:600;
        text-transform:uppercase;
    }
    & > h3{
        font-size:var(--fs-md);
        font-weight:400;
    }
`;

export const FooterNavigationLinksContainer = styled.ul`
    margin-top:1.25rem;
    display:flex;
    flex-direction:column;
    gap:.25rem;
`;

export const FooterNavigationLinkWrapper = styled.li`
    & > a{
        color:inherit;
        text-transform:uppercase;
        text-decoration:none;
        font-size:var(--fs-base);
    }
`;