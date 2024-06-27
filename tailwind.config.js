/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          }
        },
        blink: {
          "0%": {
            borderColor: "white",
          },
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) forwards, blink 0.7s steps(20) infinite",
      }
    },
  },
  plugins: [],
}