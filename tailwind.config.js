module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#451464",
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
        orange: "#FF5733",
        "dark-gray": "#282C35",
      },
    },
  },
  variants: {},
  plugins: [],
};
