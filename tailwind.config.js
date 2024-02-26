/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        grow: "grow 1s ease-in-out",
        loading: "loading 1s ease-in-out infinite",
        "fade-in": "fadeIn 2s ease-in-out",
        "load-nav": "loadNav 2s ease-in-out",
        pfp: "pfpCooking 2s ease-in-out",
        typewriter: "typewriter 2s steps(23) forwards",
        // icon: "",
      },
      keyframes: {
        // icon: {
        //   "0%": {
        //     src: "/me3.png",
        //   },
        //   "100%": {
        //     src: "/me2.jpeg",
        //   },
        // },
        pfpCooking: {
          "0%": {
            src: "/me3.png",
          },
          "100%": {
            src: "/me2.jpeg",
          },
        },
        loadNav: {
          "0%": { opacity: "0" },
          "30%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "30%": { opacity: "0", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(24em)" },
        },
        loading: {
          "0%": {
            borderRadius: "rounded-full",
          },
          "75%": {
            borderRadius: "rounded-none",
          },
          "100%": {
            borderRadius: "rounded-full",
          },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        grow: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": { transform: "scale(2)" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/background.jpeg')",
        // "footer-texture": "url('/img/footer-texture.png')",

        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
