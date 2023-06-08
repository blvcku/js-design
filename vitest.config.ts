import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    define: {
        'import.meta.vitest': `undefined`,
    },
    test: {
        globals: true,
        setupFiles: `./vitest-setup.ts`,
        environment: `jsdom`,
        include: [`src/**/*.{ts,tsx}`],
        coverage: {
            reporter: [`text`, `json`, `html`],
        },
    },
});
