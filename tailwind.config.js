/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html", "./pages/**/*{html,js}"],
	theme: {
		extend: {
			spacing: {
				98: "32rem",
				99: "34rem",
			},
		},
	},
	plugins: [],
};
