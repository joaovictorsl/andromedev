module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#CBA3CB",
          200: "#B98DB9",
          300: "#A878A8",
          400: "#976296",
          500: "#854C85",
          600: "#743673",
          700: "#622062",
          800: "#510A50",
          900: "#4D094C",
        },

        secondary: {
          100: "#FFA77A",
          200: "#FF9B70",
          300: "#FF9066",
          400: "#FF855C",
          500: "#FF7952",
          600: "#FF6E47",
          700: "#FF623D",
          800: "#FF5733",
          900: "#DB4629",
        },

        golden: "#FFC300",
      },
    },
  },
  variants: {},
  plugins: [],
};
