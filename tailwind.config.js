/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    gridTemplateColumns: {
      2: "repeat(2, minmax(0, 1fr))", // Define grid-cols-3
    },
    gap: {
      2: "0.5rem", // Define gap-2
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
export const tailwindConfig = {
  important: true,
};
