import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'],
        globals: true,
    },
});
