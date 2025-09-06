/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Inter",
		},
		extend: {
			colors: {
				off_white: "#F8F9FA",
				custom_gray: "#AEAEAE",
				charcoal: "#212121",
				accent: "#E3CAA6",
			},
		},
	},
	plugins: [],
};
