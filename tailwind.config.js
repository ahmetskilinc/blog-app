/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			lg: "960px",
		},
		extend: {
			gridTemplateColumns: {
				post: "minmax(670px, 1fr) 250px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
