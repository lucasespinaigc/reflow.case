import * as tailwindcssAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                background: 'rgba(var(--background), <alpha-value>)',
                foreground: 'rgba(var(--text-body), <alpha-value>)',
                primary: {
                    DEFAULT: 'rgba(var(--primary),<alpha-value>)',
                },
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
