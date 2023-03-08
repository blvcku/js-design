declare module '*.png' {
    const path: string;
    export default path;
}
declare module '*.jpg' {
    const path: string;
    export default path;
}
declare module '*.inline.svg' {
    const component: React.FC<React.SVGAttributes<SVGElement>>;
    export default component;
}
declare module '*.svg' {
    const path: string;
    export default path;
}
