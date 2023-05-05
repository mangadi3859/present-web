/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            screens: {
                tablet: {
                    max: "1200px",
                },
                phone: {
                    max: "768px",
                },
                "sm-phone": {
                    max: "500px",
                },
            },

            colors: {
                accent: {
                    DEFAULT: "#343ec7",
                    100: "#242b8b",
                    200: "#2a329f",
                    300: "#2f38b3",
                    400: "#343ec7",
                    500: "#5d65d2",
                    600: "#858bdd",
                    700: "#aeb2e9",
                    800: "#c2c5ee",
                    900: "#ebecf9",
                },

                primary: {
                    DEFAULT: "#FBAE3C",
                    100: "#976824",
                    200: "#C98B30",
                    300: "#E29D36",
                    400: "#FBAE3C",
                    500: "#FCBE63",
                    600: "#FDCE8A",
                    700: "#FDD79E",
                    800: "#fee7c5",
                    900: "#fff7ec",
                },

                "cs-dark": {
                    DEFAULT: "#0A2540",
                    100: "#061626",
                    200: "#081E33",
                    300: "#09213A",
                    400: "#0A2540",
                    500: "#233B53",
                },

                "cs-white": {
                    200: "#F6F9FC",
                    100: "#EFEFEF",
                },
            },
        },
    },
    plugins: [],
};
