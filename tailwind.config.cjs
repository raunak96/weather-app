/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(200, 100%, 85%)",
				secondary: "hsl(200, 100%,10%)",
				secondaryLight: "hsl(200, 100%,20%)",
			},
		},
	},
	plugins: [],
};
