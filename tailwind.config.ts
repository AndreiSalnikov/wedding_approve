import type {Config} from "tailwindcss";

const config: Config = {

    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
    theme: {
        fontFamily: {
            'comic-neue': ['Comic Neue', 'sans-serif'], // 'comic-neue': ['Neue Bold', 'sans-serif'],
            'scriptorama': ['Scriptorama', 'sans-serif'],
            'comforta': ['Comfortaa-VariableFont_wght', 'sans-serif'],
            'rotunda': ['Rotunda,sans-serif']
        }, extend: {
            screens: {
                'mobile-s': '320px', 'mobile-s2': '360px', 'mobile-s3': '390px', 'mobile-s4': '430px'
            }, keyframes: {
                a: {
                    '0%': {opacity: '0'}, '100%': {opacity: '1'},
                },
                b: {
                    '0%': {marginTop: '-25%'}, '100%': {marginTop: '0'},
                },

                c: {
                    '0%': {opacity: '0', transform: 'scale(0)'}, '100%': {opacity: '1', transform: 'scale(1)'},
                }, d: {
                    '0%': {opacity: '0', transform: 'scale(2)'}, '100%': {opacity: '1', transform: 'scale(1)'},
                },
            }, animation: {
                a: 'b 1.5s 1 cubic-bezier(.215,.61,.355,1) 2.5s backwards,a 2s 1 0s backwards',
                c: 'c 2s 1 cubic-bezier(.215,.61,.355,1) 0s backwards',
                d: 'd 2.5s 1 cubic-bezier(.215,.61,.355,1) .5s backwards',
                q: 'a 3s 1 cubic-bezier(.215,.61,.355,1) 2s backwards'
            }, backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                'welcome': "url('/img/welcome.png')",
                'rsvp': "url('/img/rsvp.png')",
                'schedule': "url('/img/schedule.png')",
                'hands': "url('/img/hands.png')",
                'galka': "url('/img/galka.png')"
            }, colors: {
                brown: "rgb(89, 78, 66)", whitealpha: "rgba(255, 255, 255, 0.7)", lightbrown: "rgb(120, 107, 102)", marine: "rgba(220, 236, 245, 0.722)", blackbrown:"rgba(89, 78, 66, 0.37)"
            },
        },
    },
    plugins: [],
};
export default config;
