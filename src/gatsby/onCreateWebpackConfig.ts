import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};

export default onCreateWebpackConfig;
