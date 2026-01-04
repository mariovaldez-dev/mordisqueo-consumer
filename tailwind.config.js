/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            epilogue: ["Raleway", "system-ui"],
        },
        screens: {
            sm: "375px",
            // => @media (min-width: 375px) { ... }
            lg: "1440px",
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            colors: {
                primary: "#f62d93",   // ejemplo verde turquesa
                secondary: "#DA68AB", // ejemplo naranja
                accent: "#cc85b7",    // ejemplo rojo
                neutral: "#4D4C7D",   // gris morado
                light: "#F7F7F7",
                black: "#f5f5f5",
                dark: "#5c5c5c",
            },
        },
    },
    plugins: [],
};
