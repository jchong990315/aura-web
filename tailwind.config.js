/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
				'./pages/**/*.{js,jsx}',
				'./components/**/*.{js,jsx}',
				'./app/**/*.{js,jsx}',
				'./src/**/*.{js,jsx}',
			],
  theme: {
			container: {
				center: true,
				padding: "15px",
			},
			screens: {
  		sm: '640px',
				md: '768px',
				lg: '960px',
				xl: '1200px',
			},
			fontFamily: {
				primary: "var(--font-jetbrainsMono)",
			},
  	extend: {
  		colors: {
  			primary: '#0F1E33',
				accent: {
  				DEFAULT: '#2A7AE2',
  				hover: '#1A5DBA'
				}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
