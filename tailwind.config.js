/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      //Primary

"Soft-Blue": "hsl(231, 69%, 60%)",
"Sh-Soft-Blue": "hsl(231, 69%, 90%)",
"Soft-Red": "hsl(0, 94%, 66%)",
"White": "hsl(0, 0%, 100%)",
"Button-White": "hsl(0, 0%, 95%)",

//Neutral

"Grayish-Blue": "hsl(229, 8%, 60%)",
"Very-Dark-Blue": "hsl(229, 31%, 21%)",
"Faded-Very-Dark-Blue": "hsl(229, 5%, 55%)",
    },
    extend: {},
  },
  plugins: [],
}

