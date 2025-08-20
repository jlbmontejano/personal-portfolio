/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Libre Franklin",
		},
		extend: {
			colors: {
				off_white: "#F8F9FA",
				charcoal: "#2B2B2B",
				accent: "#10B981",
			},
			scale: {
				102: "1.02",
			},
			keyframes: {
				fadeRight: {
					"0%": { opacity: "0", transform: "translateX(-10%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			animation: {
				fadeRight: "fadeRight 1s ease-out forwards",
			},
		},
	},
	plugins: [],
};
