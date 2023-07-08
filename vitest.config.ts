import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        tsconfigPaths({ projects: [`./tsconfig.json`] }),
        react(),
        svgr({
            exportAsDefault: true,
            include: `**/*.inline.svg`,
        }),
    ],
    define: {
        'import.meta.vitest': `undefined`,
    },
    test: {
        globals: true,
        setupFiles: `./vitest-setup.ts`,
        environment: `jsdom`,
        include: [`src/**/*.{spec,test}.{ts,tsx}`],
        coverage: {
            reporter: [`text`, `json`, `html`],
        },
    },
});
