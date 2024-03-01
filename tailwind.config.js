/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Merriweather Sans",
		},
		extend: {
			colors: {
				"emerald-green": "#50C878",
				"dark-emerald-green": "#3AA569",
				"charcoal-gray": "#36454F",
				cream: "#FFFDD0",
			},
			scale: {
				102: "1.02",
			},
		},
	},
	plugins: [],
};
