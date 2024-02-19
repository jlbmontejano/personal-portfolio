/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"emerald-green": "#50C878",
				"charcoal-gray": "#36454F",
				cream: "#FFFDD0",
			},
		},
	},
	plugins: [],
};
