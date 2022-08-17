/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			lg: "960px",
		},
		extend: {
			gridTemplateColumns: {
				post: "minmax(670px, 1fr) 250px",
			},
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
