/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ["class"],
	theme: {
		extend: {
			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
					},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
					},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
					},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
					},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
					},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
					},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
					},
				mcc: {
					red: "var(--mcc-red)",
					green: "var(--mcc-green)",
					yellow: "var(--mcc-yellow)",
					darkyellow: "var(--mcc-darkyellow)",
					black: "var(--mcc-black)",

				}
			},
		},
	},
	plugins: [],
}
