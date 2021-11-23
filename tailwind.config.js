module.exports = {
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    safelist: [
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
      "bg-green-700",
      "bg-green-800",
      "bg-green-900",
      "text-green-100",
      "text-green-200",
      "text-green-300",
      "text-green-400",
      "text-green-500",
      "text-green-600",
      "text-green-700",
      "text-green-800",
      "text-green-900",
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
