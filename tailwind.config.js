/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textUnderline: {
        base: "relative text-gray-800 hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-600 after:w-0 hover:after:w-full after:transition-all after:duration-300",
        // You can add variations if needed
        blue: "after:bg-blue-600",
        red: "after:bg-red-600",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-underline-base": {
          "@apply relative text-gray-800 hover:text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-600 after:w-0 hover:after:w-full after:transition-all after:duration-300":
            {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
