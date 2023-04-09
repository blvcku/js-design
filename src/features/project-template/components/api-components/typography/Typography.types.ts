export enum TypographyWeights {
    thin = 100,
    extraLight = 200,
    light = 300,
    regular = 400,
    medium = 500,
    semiBold = 600,
    bold = 700,
    extraBold = 800,
    black = 900,
}

export enum TypographyWeightNames {
    thin = `thin`,
    extraLight = `extra-light`,
    light = `light`,
    regular = `regular`,
    medium = `medium`,
    semiBold = `semi-bold`,
    bold = `bold`,
    extraBold = `extra-bold`,
    black = `black`,
}

export interface TypographyContainerProps {
    marginTop: Nullable<number>;
}

export interface TypographyWeightProps {
    fontWeight: TypographyWeights;
    fontName: string;
    fontStyle: string;
    fontUrl: string;
}

export interface TypographyNameProps {
    fontName: string;
    fontStyle: string;
}
