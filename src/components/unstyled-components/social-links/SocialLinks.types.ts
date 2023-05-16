export type SocialLinksContainerProps = React.HTMLAttributes<HTMLUListElement>;

export interface SocialLinkProps extends SocialLinksContainerProps {
    displayName: boolean;
}

export interface SocialLinkObject {
    url: string;
    name: string;
    label: string;
    icon: React.FC<React.SVGAttributes<SVGElement>>;
}

export type SocialLinkObjects = SocialLinkObject[];
