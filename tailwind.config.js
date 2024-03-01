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
			keyframes: {
				fadeRight: {
					"0%": { opacity: "0", transform: "translateX(-12%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			animation: {
				fadeRight: "fadeRight 1.5s ease-out forwards",
			},
		},
	},
	plugins: [],
};
